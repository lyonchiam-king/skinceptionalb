import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

const DATA_FILE = path.resolve(process.cwd(), 'bookings_spreadsheet.json');
const CSV_FILE = path.resolve(process.cwd(), 'bookings_spreadsheet.csv');

// Initialize spreadsheet store
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
}

if (!fs.existsSync(CSV_FILE)) {
  fs.writeFileSync(CSV_FILE, 'Timestamp,Booking ID,Customer Name,Phone Number,Service Requested,Preferred Date,Preferred Time,Client Goal,Notes,Status\n');
}

// API Route: Submit new booking enquiry
app.post('/api/bookings', (req, res) => {
  try {
    const { name, phone, service, date, time, notes, goal } = req.body;

    if (!name || !phone || !service) {
      return res.status(400).json({ error: 'Name, phone number, and service are required.' });
    }

    const timestamp = new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' });
    const bookingId = 'SKIN-' + Math.floor(1000 + Math.random() * 9000);

    const newBooking = {
      id: bookingId,
      timestamp,
      name,
      phone,
      service,
      date: date || 'Flexible',
      time: time || 'Flexible',
      goal: goal || 'Not specified',
      notes: notes || 'None',
      status: 'New Enquiry'
    };

    // Save to JSON
    const existing = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    existing.unshift(newBooking);
    fs.writeFileSync(DATA_FILE, JSON.stringify(existing, null, 2));

    // Append row to CSV (Spreadsheet Format)
    const csvRow = `"${timestamp}","${bookingId}","${name.replace(/"/g, '""')}","${phone.replace(/"/g, '""')}","${service.replace(/"/g, '""')}","${(date || 'Flexible').replace(/"/g, '""')}","${(time || 'Flexible').replace(/"/g, '""')}","${(goal || 'Not specified').replace(/"/g, '""')}","${(notes || 'None').replace(/"/g, '""')}","New Enquiry"\n`;
    fs.appendFileSync(CSV_FILE, csvRow);

    console.log(`[Spreadsheet Logged] New booking #${bookingId} for ${name} - ${service}`);

    return res.status(200).json({
      success: true,
      booking: newBooking,
      message: 'Booking enquiry logged to spreadsheet successfully.'
    });
  } catch (err) {
    console.error('Error logging booking:', err);
    return res.status(500).json({ error: 'Failed to process booking enquiry.' });
  }
});

// API Route: Get all bookings (Spreadsheet data)
app.get('/api/bookings', (_req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    res.json({ bookings: data });
  } catch (_err) {
    res.json({ bookings: [] });
  }
});

// API Route: Download CSV spreadsheet directly
app.get('/api/bookings/download-csv', (_req, res) => {
  try {
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="skinceptional_bookings.csv"');
    const csvContent = fs.readFileSync(CSV_FILE, 'utf-8');
    res.send(csvContent);
  } catch (_err) {
    res.status(500).send('Error reading CSV');
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: process.env.DISABLE_HMR !== 'true' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();

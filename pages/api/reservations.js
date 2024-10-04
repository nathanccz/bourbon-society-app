
import connectDB from '../../config/database';
import Reservation from '../../models/Reservation';

export default async function handler(req, res) {
    const { method } = req;

    console.log(req.body)
  
    await connectDB();
  
    switch (method) {
      case 'POST':
        try {
          const reservation = new Reservation(req.body);
          await reservation.save();
          res.status(201).json({ success: true, data: reservation });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  }
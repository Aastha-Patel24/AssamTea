import Contact from "../models/Contact.js";
import BulkOrderContact from '../models/BulkOrder.js';

export const submitForm = async(req,res)=>{

    try {
        const {firstName, lastName, email, phone, message} = req.body;

         if (!firstName || !email || !message) {
      return res.status(400).json({ success: false, message: "Required fields missing" });
    }

    const contact = await Contact.create({firstName, lastName, email, phone, message });

    return res.status(201).json({success:true}, contact);

    } catch (error) {
        console.log(error);
    }
}





export const submitBulkOrderContact = async (req, res) => {
  const { address, email, phone, workingHours } = req.body;

  try {
    if (!address || !email || !phone || !workingHours) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newEntry = new BulkOrderContact({ address, email, phone, workingHours });
    await newEntry.save();

    return res.status(201).json({ message: 'Bulk order contact submitted successfully' });
  } catch (error) {
    console.error("Bulk order submission failed:", error);
   return  res.status(500).json({ message: 'Server error' });
  }
};

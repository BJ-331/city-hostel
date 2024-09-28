 export const BookingNotification = (
  admin: string,
  username: string,
  img: string,
  email: string,
  contact: string,
  address: string,
  people: number,
  hostelName: string,
  location: string,
  peopleNumber: number,
  price: string
) => {
  const emailBody = ` <div style="font-family: Arial, sans-serif; max-width: 600px;  padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #4CAF50; text-align: center;">New Room Booking Notification</h2>
          <p style="font-size: 16px; color: #333;">Hi <strong>${admin}</strong>,</p>
          <p style="font-size: 16px; color: #333;">New user  with the name ${username} has just schedule booking to the following room</p>
          
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img src=${img} alt={room.hostelName} style={{ maxWidth: '60%', height: 'auto', borderRadius: '8px' }} />
        </div>
        
        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Booking Details:</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#3498db' }}>User Information:</h3>
          <p><strong>Name:</strong> ${username}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact:</strong> ${contact}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Number of People:</strong> ${people}</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#3498db' }}>Room Information:</h3>
          <p><strong>Hostel Name:</strong> ${hostelName}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Capacity:</strong> ${peopleNumber} people</p>
          <p><strong>Price:</strong> NPR ${price}</p>
        </div>
        
        <div style={{ backgroundColor: '#e8f4fd', padding: '15px', borderRadius: '8px', marginTop: '30px' }}>
          <p style={{ color: '#2980b9', textAlign: 'center', margin: 0 }}>
            Please contact the user to confirm the booking and provide any additional information.
          </p>
        </div>


          <p style="font-size: 16px; color: #333;">Best Regards,</p>
          <p style="font-size: 16px; color: #333;"><strong>Girls Hostel</strong></p>
          <hr style="border-top: 1px solid #ddd; margin-top: 20px;">
          <p style="font-size: 12px; text-align: center; color: #999;">&copy; 2024 Girl Hostel. All rights reserved.</p>
        </div>
        `;
  return emailBody;
};

export const BookingRejected = (
  username: string,
  hostelname: string,
  email: string,
  contact: string,
  hostelemail: string,
  hosteladdress: string,
  hostelcontact: string
) => {
  const emailbody = `
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#f8f8f8' }}>
      <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#e74c3c', textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>Booking Reservation Update</h1>
        
        <p style={{ color: '#2c3e50', fontSize: '16px', lineHeight: '1.5', marginBottom: '20px' }}>
          Dear ${username},
        </p>
        
        <p style={{ color: '#2c3e50', fontSize: '16px', lineHeight: '1.5', marginBottom: '20px' }}>
          We regret to inform you that your booking reservation at <strong>${hostelname}</strong> has been rejected. We understand this may be disappointing, and we sincerely apologize for any inconvenience this may cause.
        </p>
        
        <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h2 style={{ color: '#3498db', fontSize: '18px', marginBottom: '10px' }}>Booking Details:</h2>
          <p style={{ margin: '5px 0', color: '#34495e' }}><strong>User:</strong> ${username}</p>
          <p style={{ margin: '5px 0', color: '#34495e' }}><strong>Email:</strong> ${email}</p>
          <p style={{ margin: '5px 0', color: '#34495e' }}><strong>Phone:</strong> ${contact}</p>
        </div>
        
        <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h2 style={{ color: '#3498db', fontSize: '18px', marginBottom: '10px' }}>Hostel Information:</h2>
          <p style={{ margin: '5px 0', color: '#34495e' }}><strong>Name:</strong> ${hostelname}</p>
          <p style={{ margin: '5px 0', color: '#34495e' }}><strong>Email:</strong> ${hostelemail}</p>
          <p style={{ margin: '5px 0', color: '#34495e' }}><strong>Address:</strong> ${hosteladdress}</p>
          <p style={{ margin: '5px 0', color: '#34495e' }}><strong>Contact:</strong> ${hostelcontact}</p>
        </div>
        
        <p style={{ color: '#2c3e50', fontSize: '16px', lineHeight: '1.5', marginBottom: '20px' }}>
          If you have any questions or would like more information about the rejection, please don't hesitate to contact the hostel directly using the provided contact information.
        </p>
        
        <p style={{ color: '#2c3e50', fontSize: '16px', lineHeight: '1.5', marginBottom: '20px' }}>
          We appreciate your interest in ${hostelname} and hope you'll consider us for future bookings.
        </p>
        
        <p style={{ color: '#2c3e50', fontSize: '16px', lineHeight: '1.5' }}>
          Best regards,<br />
          The Booking Team
        </p>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '20px', color: '#7f8c8d', fontSize: '12px' }}>
        <p>This is an automated message. Please do not reply to this email.</p>
        <p>If you need assistance, please contact ${hostelname} directly.</p>
      </div>
    </div>
  `;

  return emailbody;
};

export const BookingAccepted = (
  username: string,
  hostelname: string,
  email: string,
  contact: string,
  hostelemail: string,
  hosteladdress: string,
  hostelcontact: string
) => {
  const emailBody = `<div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#f0f8ff' }}>
      <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#2ecc71', textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>Booking Reservation Confirmed!</h1>
        
        <p style={{ color: '#2c3e50', fontSize: '16px', lineHeight: '1.5', marginBottom: '20px' }}>
          Dear ${username},
        </p>
        
        <p style={{ color: '#2c3e50', fontSize: '16px', lineHeight: '1.5', marginBottom: '20px' }}>
          We are delighted to inform you that your booking reservation at <strong>${hostelname}</strong> has been accepted! We're excited to welcome you and hope you'll have a wonderful stay with us.
        </p>
        
        <div style={{ backgroundColor: '#e8f6f3', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h2 style={{ color: '#16a085', fontSize: '18px', marginBottom: '10px' }}>Your Booking Details:</h2>
          <p style={{ margin: '5px 0', color: '#34495e' }}><strong>Name:</strong> ${username}</p>
          <p style={{ margin: '5px 0', color: '#34495e' }}><strong>Email:</strong> ${email}</p>
          <p style={{ margin: '5px 0', color: '#34495e' }}><strong>Phone:</strong> ${contact}</p>
        </div>
        
        <div style={{ backgroundColor: '#e8f6f3', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h2 style={{ color: '#16a085', fontSize: '18px', marginBottom: '10px' }}>Hostel Information:</h2>
          <p style={{ margin: '5px 0', color: '#34495e' }}><strong>Name:</strong> ${hostelname}</p>
          <p style={{ margin: '5px 0', color: '#34495e' }}><strong>Email:</strong> ${hostelemail}</p>
          <p style={{ margin: '5px 0', color: '#34495e' }}><strong>Address:</strong> ${hosteladdress}</p>
          <p style={{ margin: '5px 0', color: '#34495e' }}><strong>Contact:</strong> ${hostelcontact}</p>
        </div>
        
        <p style={{ color: '#2c3e50', fontSize: '16px', lineHeight: '1.5', marginBottom: '20px' }}>
          If you have any questions or special requests before your arrival, please don't hesitate to contact us using the provided hostel contact information.
        </p>
        
        <p style={{ color: '#2c3e50', fontSize: '16px', lineHeight: '1.5', marginBottom: '20px' }}>
          We look forward to providing you with a comfortable and enjoyable stay at ${hostelname}.
        </p>
        
        <div style={{ backgroundColor: '#d4efdf', padding: '15px', borderRadius: '8px', marginTop: '30px' }}>
          <p style={{ color: '#27ae60', textAlign: 'center', margin: 0, fontWeight: 'bold' }}>
            Thank you for choosing ${hostelname}!
          </p>
        </div>
        
        <p style={{ color: '#2c3e50', fontSize: '16px', lineHeight: '1.5', marginTop: '20px' }}>
          Best regards,<br />
          The {hostel.name} Team
        </p>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '20px', color: '#7f8c8d', fontSize: '12px' }}>
        <p>This is an automated message. Please do not reply to this email.</p>
        <p>If you need assistance, please contact ${hostelname} directly at ${hostelcontact}.</p>
      </div>
    </div>`;
  return emailBody;
};

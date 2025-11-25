import React, { useState } from 'react';
import { Heart, Home, Calendar, User, Clock, CreditCard, FileText, Phone, MapPin, Check } from 'lucide-react';

export default function ViaHealthApp() {
  const [screen, setScreen] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [editingBooking, setEditingBooking] = useState(null);
  
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      service: 'Blood Test',
      icon: '🩸',
      doctor: 'Dr. chiheb Wejdene',
      date: 'Dec 25, 2024',
      time: '2:00 PM',
      status: 'Upcoming',
      price: '$45'
    },
    {
      id: 2,
      service: 'Health Checkup',
      icon: '🏥',
      doctor: 'Dr. Michael Chen',
      date: 'Dec 20, 2024',
      time: '10:00 AM',
      status: 'Completed',
      price: '$80'
    }
  ]);

  const [medicalInfo, setMedicalInfo] = useState({
    conditions: ['Diabetes Type 2', 'High Blood Pressure'],
    allergies: ['Penicillin'],
    medications: ['Metformin 500mg', 'Lisinopril 10mg']
  });

  const [profile, setProfile] = useState({
    name: 'Slimani Sabrina',
    age: '19',
    phone: '+1 (555) 123-4567',
    email: 'Slimani.sabrina@email.com',
    address: '123 Oak Street, Springfield',
    emergencyContact: '(555) 987-6543',
    paymentMethod: 'Cash'
  });

  const services = [
    { id: 1, name: 'Blood Test', icon: '🩸', price: '$45', time: '30 min' },
    { id: 2, name: 'Health Checkup', icon: '🏥', price: '$80', time: '45 min' },
    { id: 3, name: 'Vaccination', icon: '💉', price: '$35', time: '20 min' },
    { id: 4, name: 'IV Therapy', icon: '💧', price: '$120', time: '60 min' },
    { id: 5, name: 'Wound Care', icon: '🩹', price: '$60', time: '40 min' },
    { id: 6, name: 'Physical Therapy', icon: '🤸', price: '$90', time: '50 min' }
  ];

  const HomeScreen = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-teal-500 rounded-3xl p-6 text-white shadow-lg transform hover:scale-[1.02] transition-all duration-300">
        <h2 className="text-2xl font-bold mb-2 animate-fade-in">Welcome to ViaHealth</h2>
        <p className="text-blue-100">💰 Affordable professional healthcare at your doorstep</p>
        <div className="mt-3 flex gap-2 text-xs">
          <span className="bg-white/20 px-3 py-1 rounded-full">✓ Save 40%</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">✓ No Hidden Fees</span>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Our Services</h3>
          <span className="text-xs text-teal-600 font-bold bg-teal-50 px-3 py-1 rounded-full">💰 Budget-Friendly</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => {
                setSelectedService(service);
                setScreen('booking');
                setBookingStep(1);
              }}
              className="bg-white rounded-2xl p-4 shadow-md border-2 border-transparent hover:border-blue-400 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              style={{animation: `fadeInUp 0.${index + 3}s ease-out`}}
            >
              <div className="text-4xl mb-2 transform transition-transform hover:scale-110">{service.icon}</div>
              <h4 className="font-semibold text-gray-800 text-sm mb-1">{service.name}</h4>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span className="font-bold text-teal-600 text-base">{service.price}</span>
                <span className="bg-blue-50 px-2 py-1 rounded-full text-blue-600">{service.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-5 border-2 border-green-200 shadow-md">
        <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">💰</span> Why Choose ViaHealth?
        </h4>
        <ul className="text-sm text-green-700 space-y-2">
          <li className="flex items-center gap-2 transform hover:translate-x-1 transition-transform">
            <span className="text-green-500">✓</span> Certified medical professionals
          </li>
          <li className="flex items-center gap-2 transform hover:translate-x-1 transition-transform">
            <span className="text-green-500">✓</span> Same-day service available
          </li>
          <li className="flex items-center gap-2 transform hover:translate-x-1 transition-transform">
            <span className="text-green-500">✓</span> Up to 40% cheaper than clinics
          </li>
          <li className="flex items-center gap-2 transform hover:translate-x-1 transition-transform">
            <span className="text-green-500">✓</span> Flexible payment options
          </li>
        </ul>
      </div>
    </div>
  );

  const BookingScreen = () => (
    <div className="space-y-6">
      <button
        onClick={() => setScreen('home')}
        className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
      >
        <span>←</span> Back
      </button>

      <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-5xl animate-pulse">{selectedService.icon}</div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">{selectedService.name}</h3>
            <p className="text-sm text-gray-500">
              <span className="text-teal-600 font-bold text-base">{selectedService.price}</span> • {selectedService.time}
            </p>
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          {[1, 2, 3].map(step => (
            <div
              key={step}
              className={`flex-1 h-2 rounded-full transition-all duration-500 ${
                bookingStep >= step ? 'bg-gradient-to-r from-blue-500 to-teal-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        {bookingStep === 1 && (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800 flex items-center gap-2">
              📅 Select Date & Time
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {['Today', 'Tomorrow', 'Dec 26'].map(date => (
                <button
                  key={date}
                  className="py-3 px-4 rounded-xl border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-teal-50 text-blue-600 font-medium text-sm hover:shadow-md transform hover:scale-105 transition-all"
                >
                  {date}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM', '6:00 PM'].map(time => (
                <button
                  key={time}
                  className="py-2 px-3 rounded-xl border-2 border-gray-200 hover:border-teal-400 hover:bg-teal-50 text-sm transition-all transform hover:scale-105"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {bookingStep === 2 && (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Your Address</h4>
            <input
              type="text"
              placeholder="Street Address"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="City"
                className="flex-1 p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="ZIP"
                className="w-24 p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
            <textarea
              placeholder="Special instructions (optional)"
              rows="3"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
        )}

        {bookingStep === 3 && (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800 flex items-center gap-2">
              💳 Payment Method
            </h4>
            <div className="space-y-2">
              {['Credit Card', 'PayPal', 'Cash on Service'].map(method => (
                <button
                  key={method}
                  className="w-full p-4 rounded-xl border-2 border-blue-400 bg-gradient-to-r from-blue-50 to-teal-50 text-left flex items-center justify-between hover:shadow-md transition-all transform hover:scale-[1.02]"
                >
                  <span className="font-medium text-blue-600">{method}</span>
                  <Check className="text-blue-600" size={20} />
                </button>
              ))}
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 mt-6 border-2 border-gray-200">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Service</span>
                <span className="font-semibold">{selectedService.price}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Service Fee</span>
                <span className="font-semibold">$5</span>
              </div>
              <div className="flex justify-between mb-2 text-green-600">
                <span className="font-medium">💰 Economy Discount</span>
                <span className="font-bold">-$3</span>
              </div>
              <div className="border-t-2 border-gray-300 my-2"></div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-800">Total</span>
                <span className="font-bold text-teal-600 text-xl">
                  ${parseInt(selectedService.price.slice(1)) + 2}
                </span>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => {
            if (bookingStep < 3) {
              setBookingStep(bookingStep + 1);
            } else {
              setScreen('confirmation');
            }
          }}
          className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 rounded-xl font-semibold mt-6 hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-95"
        >
          {bookingStep === 3 ? '✓ Confirm Booking' : 'Continue →'}
        </button>
      </div>
    </div>
  );

  const ConfirmationScreen = () => (
    <div className="space-y-6 text-center">
      <div className="bg-gradient-to-br from-green-100 to-teal-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
        <Check className="text-green-600" size={50} />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">🎉 Booking Confirmed!</h2>
        <p className="text-gray-600">Your healthcare professional is on the way</p>
        <p className="text-teal-600 text-sm mt-2">💰 You saved $3 with our economy plan!</p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-left">
        <h3 className="font-semibold text-gray-800 mb-4">Booking Details</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="text-2xl">{selectedService.icon}</div>
            <div>
              <p className="font-medium text-gray-800">{selectedService.name}</p>
              <p className="text-sm text-gray-500">Today at 2:00 PM</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-3">
            <p className="text-sm text-gray-600 mb-1">Booking ID: #VH12345</p>
            <p className="text-sm text-gray-600">Estimated arrival: 25-35 minutes</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setScreen('home')}
        className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-[1.02]"
      >
        Back to Home
      </button>
    </div>
  );

  const BookingsScreen = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">My Appointments</h2>
      
      {appointments.map(apt => (
        <div key={apt.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-3xl">{apt.icon}</div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">{apt.service}</h3>
              <p className="text-sm text-gray-500 mt-1">👨‍⚕️ {apt.doctor}</p>
              <div className="flex gap-4 mt-2 text-sm text-gray-600">
                <span>📅 {apt.date}</span>
                <span>🕐 {apt.time}</span>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              apt.status === 'Upcoming' 
                ? 'bg-blue-100 text-blue-600' 
                : 'bg-green-100 text-green-600'
            }`}>
              {apt.status}
            </span>
          </div>
          
          {apt.status === 'Upcoming' && (
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setEditingBooking(apt);
                  setScreen('edit-booking');
                }}
                className="flex-1 py-2 rounded-xl border-2 border-blue-500 text-blue-600 font-medium text-sm"
              >
                Edit
              </button>
              <button className="flex-1 py-2 rounded-xl bg-red-50 border-2 border-red-200 text-red-600 font-medium text-sm">
                Cancel
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const EditBookingScreen = () => (
    <div className="space-y-6">
      <button
        onClick={() => setScreen('bookings')}
        className="text-blue-600 text-sm font-medium"
      >
        ← Back to Appointments
      </button>

      <h2 className="text-2xl font-bold text-gray-800">Edit Appointment</h2>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Service</label>
          <input
            type="text"
            value={editingBooking?.service}
            className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
            readOnly
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Doctor</label>
          <select className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none">
            <option>{editingBooking?.doctor}</option>
            <option>Dr. Chiheb Nour el imene</option>
            <option>Dr. Chiheb Wejdene</option>
            <option>Dr. Fawzi</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Date</label>
            <input
              type="date"
              defaultValue="2024-12-25"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Time</label>
            <select className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none">
              <option>2:00 PM</option>
              <option>9:00 AM</option>
              <option>11:00 AM</option>
              <option>4:00 PM</option>
              <option>6:00 PM</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Special Notes</label>
          <textarea
            placeholder="Any special requests or instructions..."
            rows="3"
            className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <button
        onClick={() => setScreen('bookings')}
        className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        Save Changes
      </button>
    </div>
  );

  const ReportsScreen = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Medical Records</h2>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">Health Conditions</h3>
          <button className="text-blue-600 text-sm font-medium">+ Add</button>
        </div>
        <div className="space-y-2">
          {medicalInfo.conditions.map((condition, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-red-50 rounded-xl">
              <span className="text-sm text-gray-800">{condition}</span>
              <button className="text-red-600 text-xs">Remove</button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">Allergies</h3>
          <button className="text-blue-600 text-sm font-medium">+ Add</button>
        </div>
        <div className="space-y-2">
          {medicalInfo.allergies.map((allergy, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-orange-50 rounded-xl">
              <span className="text-sm text-gray-800">⚠️ {allergy}</span>
              <button className="text-orange-600 text-xs">Remove</button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">Current Medications</h3>
          <button className="text-blue-600 text-sm font-medium">+ Add</button>
        </div>
        <div className="space-y-2">
          {medicalInfo.medications.map((med, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
              <span className="text-sm text-gray-800">💊 {med}</span>
              <button className="text-green-700 text-xs">Remove</button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-4">Previous Test Results</h3>
        <div className="space-y-3">
          {['Blood Test - Dec 20, 2024', 'Health Checkup - Nov 15, 2024'].map((test, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
              <span className="text-sm text-gray-800">📄 {test}</span>
              <button className="text-blue-600 text-xs font-medium">View</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProfileScreen = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="text-blue-600" size={40} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
        <p className="text-gray-500 text-sm">{profile.email}</p>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-4">
        <h3 className="font-semibold text-gray-800">Personal Information</h3>
        
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Full Name</label>
          <input
            type="text"
            value={profile.name}
            className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Age</label>
            <input
              type="text"
              value={profile.age}
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Phone</label>
            <input
              type="tel"
              value={profile.phone}
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Address</label>
          <input
            type="text"
            value={profile.address}
            className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Emergency Contact</label>
          <input
            type="text"
            value={profile.emergencyContact}
            className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-4">
        <h3 className="font-semibold text-gray-800">Payment Settings</h3>
        
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Preferred Payment Method</label>
          <select 
            value={profile.paymentMethod}
            className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
          >
            <option>Cash</option>
            <option>Credit Card</option>
            <option>PayPal</option>
            <option>Insurance</option>
          </select>
        </div>

        {profile.paymentMethod === 'Credit Card' && (
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Card Number</label>
            <input
              type="text"
              placeholder="**** **** **** 1234"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
        )}
      </div>

      <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition">
        Save Profile
      </button>

      <button className="w-full bg-red-50 text-red-600 py-4 rounded-xl font-semibold border-2 border-red-200">
        Logout
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 pb-20">
      {/* Modern Cool Header */}
      <div className="bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-500 shadow-xl sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Super Cool Modern Logo */}
            <div className="relative group">
              <div className="absolute inset-0 bg-white/30 rounded-2xl blur-md group-hover:blur-lg transition-all"></div>
              <div className="relative bg-white rounded-2xl p-2.5 shadow-2xl transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                <svg width="40" height="40" viewBox="0 0 100 100">
                  {/* Modern house with gradient */}
                  <defs>
                    <linearGradient id="houseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#14B8A6" />
                    </linearGradient>
                  </defs>
                  
                  {/* House outline */}
                  <path d="M20 50 L50 25 L80 50 L80 80 L20 80 Z" fill="none" stroke="url(#houseGradient)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                  
                  {/* Chimney */}
                  <rect x="65" y="35" width="8" height="15" fill="url(#houseGradient)" rx="2"/>
                  
                  {/* Heart */}
                  <path d="M50 55 C47 52 42 52 40 56 C38 60 40 65 50 72 C60 65 62 60 60 56 C58 52 53 52 50 55" fill="url(#houseGradient)"/>
                  
                  {/* Door base */}
                  <rect x="40" y="70" width="20" height="10" fill="url(#houseGradient)" rx="2"/>
                </svg>
                
                {/* Pulse indicator */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            {/* Cool text styling */}
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-white tracking-tight drop-shadow-lg">Via</span>
                <span className="text-2xl font-black text-yellow-300 tracking-tight drop-shadow-lg">Health</span>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse"></div>
                <p className="text-xs text-white/90 font-bold tracking-wide">AFFORDABLE CARE</p>
              </div>
            </div>
          </div>
          
          {/* Cool profile button */}
          <button className="relative bg-white/20 backdrop-blur-sm p-2.5 rounded-xl shadow-lg hover:bg-white/30 transition-all transform hover:scale-110 active:scale-95">
            <User className="text-white" size={20} />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-blue-900">3</div>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6">
        {screen === 'home' && <HomeScreen />}
        {screen === 'booking' && <BookingScreen />}
        {screen === 'confirmation' && <ConfirmationScreen />}
        {screen === 'bookings' && <BookingsScreen />}
        {screen === 'edit-booking' && <EditBookingScreen />}
        {screen === 'reports' && <ReportsScreen />}
        {screen === 'profile' && <ProfileScreen />}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-blue-100 shadow-2xl">
        <div className="max-w-md mx-auto px-4 py-3 flex justify-around">
          {[
            { icon: Home, label: 'Home', id: 'home' },
            { icon: Calendar, label: 'Bookings', id: 'bookings' },
            { icon: FileText, label: 'Records', id: 'reports' },
            { icon: User, label: 'Profile', id: 'profile' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setScreen(item.id)}
              className="flex flex-col items-center gap-1 transition-all transform hover:scale-110"
            >
              <div className={`p-2 rounded-xl transition-all ${screen === item.id ? 'bg-gradient-to-r from-blue-500 to-teal-500' : ''}`}>
                <item.icon
                  size={20}
                  className={screen === item.id ? 'text-white' : 'text-gray-400'}
                />
              </div>
              <span
                className={`text-xs ${
                  screen === item.id ? 'text-blue-600 font-bold' : 'text-gray-400'
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Wifi, Car, Coffee, Tv, Wind, Users, Calendar, UserCheck, Baby, X } from "lucide-react";

interface Room {
  id: number;
  name: string;
  description: string;
  price: string;
  capacity: string;
  size: string;
  amenities: string[];
  features: string[];
  image: string;
}

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Calculate default dates (tomorrow and day after)
  const getDefaultDates = () => {
    const today = new Date();
    const checkIn = new Date(today);
    checkIn.setDate(today.getDate() + 1);
    const checkOut = new Date(today);
    checkOut.setDate(today.getDate() + 2);

    // Format as YYYY-MM-DD for input[type="date"]
    const formatForInput = (date: Date) => {
      return date.toISOString().split('T')[0];
    };

    return {
      checkIn: formatForInput(checkIn),
      checkOut: formatForInput(checkOut)
    };
  };

  const defaultDates = getDefaultDates();

  const [bookingDetails, setBookingDetails] = useState({
    checkIn: defaultDates.checkIn,
    checkOut: defaultDates.checkOut,
    adults: 2,
    children: 0
  });

  const rooms: Room[] = [
    {
      id: 1,
      name: "Deluxe Mountain View",
      description: "Spacious room with panoramic mountain views, perfect for couples seeking tranquility.",
      price: "₹3,500",
      capacity: "2 Adults",
      size: "350 sq ft",
      amenities: ["Mountain View", "AC", "WiFi", "Tea/Coffee", "TV", "Balcony"],
      features: ["1 King Bed", "1 Bathroom", "Private Balcony"],
      image: "/lovable-uploads/210e942e-c3b7-41c5-8153-d5801e026110.png"
    },
    {
      id: 2,
      name: "Family Suite",
      description: "Large suite with separate living area, ideal for families with children.",
      price: "₹5,500",
      capacity: "4 Adults + 2 Children",
      size: "550 sq ft",
      amenities: ["Valley View", "AC", "WiFi", "Kitchenette", "TV", "Dining Area"],
      features: ["2 Bedrooms", "2 Bathrooms", "Living Room", "Kitchenette"],
      image: "/lovable-uploads/a344e0f6-1cd8-4d5b-ac30-8c9170c82b73.png"
    },
    {
      id: 3,
      name: "Standard Cottage Room",
      description: "Cozy and comfortable room with garden views and all essential amenities.",
      price: "₹2,500",
      capacity: "2 Adults",
      size: "280 sq ft",
      amenities: ["Garden View", "Fan", "WiFi", "Tea/Coffee", "Shared Balcony"],
      features: ["1 Queen Bed", "1 Bathroom", "Garden Access"],
      image: "/lovable-uploads/074e847d-d7e1-4db0-9286-df033d8161f0.png"
    }
  ];

  const allAmenities = [
    { icon: Wifi, name: "Free WiFi" },
    { icon: Car, name: "Parking" },
    { icon: Coffee, name: "Tea/Coffee" },
    { icon: Tv, name: "Television" },
    { icon: Wind, name: "AC/Fan" },
    { icon: Users, name: "Room Service" }
  ];

  const handleBookRoom = (room: Room) => {
    setSelectedRoom(room);
    // Reset to default dates when opening
    const dates = getDefaultDates();
    setBookingDetails({
      checkIn: dates.checkIn,
      checkOut: dates.checkOut,
      adults: 2,
      children: 0
    });
    setIsBookingOpen(true);
  };

  const formatDisplayDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const calculateNights = () => {
    const checkIn = new Date(bookingDetails.checkIn);
    const checkOut = new Date(bookingDetails.checkOut);
    const diffTime = checkOut.getTime() - checkIn.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const handleSendEnquiry = () => {
    if (!selectedRoom) return;

    const phoneNumber = "+919892701200";
    const nights = calculateNights();

    const message = `Hello! I would like to enquire about a room at Satya Anand Cottage.

🏨 *Room:* ${selectedRoom.name}

📅 *Check-in:* ${formatDisplayDate(bookingDetails.checkIn)}
📅 *Check-out:* ${formatDisplayDate(bookingDetails.checkOut)}
🌙 *Duration:* ${nights} night${nights > 1 ? 's' : ''}

👥 *Guests:*
   • Adults: ${bookingDetails.adults}
   • Children: ${bookingDetails.children}

Please let me know the rates and availability. Thank you!`;

    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsBookingOpen(false);
  };

  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comfortable Accommodations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-mountain-green mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our thoughtfully designed rooms, each offering stunning views
            and modern amenities in a peaceful, vegetarian environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {rooms.map((room, index) => (
            <Card key={room.id} className="overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 rounded-3xl bg-card/80 backdrop-blur-sm animate-fade-up group" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className="absolute top-4 right-4 glass-morphism text-white border-white/20">
                  {room.capacity}
                </Badge>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-card-foreground">{room.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{room.size}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{room.price}</div>
                    <div className="text-sm text-muted-foreground">per night</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4">{room.description}</p>

                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Room Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => handleBookRoom(room)}
                  className="w-full bg-gradient-primary hover:shadow-mountain transition-all duration-300 hover:scale-105 rounded-xl"
                >
                  Book This Room
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Amenities */}
        <div className="glass-morphism rounded-3xl p-8 shadow-glass">
          <h3 className="text-2xl font-bold text-card-foreground text-center mb-8 animate-fade-up">
            All Rooms Include
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {allAmenities.map((amenity, index) => (
              <div key={index} className="text-center group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-mountain">
                  <amenity.icon className="h-7 w-7 text-white" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">{amenity.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-md glass-morphism border-white/20">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-card-foreground flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Book Your Stay
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selectedRoom && (
                <span className="flex items-center gap-2 mt-2">
                  <span className="font-semibold text-primary">{selectedRoom.name}</span>
                  <span>•</span>
                  <span>{selectedRoom.price}/night</span>
                </span>
              )}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-5 py-4">
            {/* Date Selection */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="checkIn" className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-500" />
                  Check-in
                </Label>
                <Input
                  id="checkIn"
                  type="date"
                  value={bookingDetails.checkIn}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setBookingDetails(prev => ({
                    ...prev,
                    checkIn: e.target.value,
                    // Auto-update checkout if check-in is after checkout
                    checkOut: e.target.value >= prev.checkOut
                      ? new Date(new Date(e.target.value).getTime() + 86400000).toISOString().split('T')[0]
                      : prev.checkOut
                  }))}
                  className="bg-background/50 border-white/20"
                />
                <p className="text-xs text-muted-foreground">{formatDisplayDate(bookingDetails.checkIn)}</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="checkOut" className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-red-500" />
                  Check-out
                </Label>
                <Input
                  id="checkOut"
                  type="date"
                  value={bookingDetails.checkOut}
                  min={bookingDetails.checkIn}
                  onChange={(e) => setBookingDetails(prev => ({ ...prev, checkOut: e.target.value }))}
                  className="bg-background/50 border-white/20"
                />
                <p className="text-xs text-muted-foreground">{formatDisplayDate(bookingDetails.checkOut)}</p>
              </div>
            </div>

            {/* Stay Duration Display */}
            <div className="bg-primary/10 rounded-xl p-3 text-center">
              <span className="text-sm text-muted-foreground">Duration: </span>
              <span className="font-semibold text-primary">{calculateNights()} night{calculateNights() > 1 ? 's' : ''}</span>
            </div>

            {/* Guest Selection */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <UserCheck className="h-4 w-4 text-blue-500" />
                  Adults
                </Label>
                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full"
                    onClick={() => setBookingDetails(prev => ({ ...prev, adults: Math.max(1, prev.adults - 1) }))}
                    disabled={bookingDetails.adults <= 1}
                  >
                    -
                  </Button>
                  <span className="text-xl font-bold w-8 text-center">{bookingDetails.adults}</span>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full"
                    onClick={() => setBookingDetails(prev => ({ ...prev, adults: Math.min(6, prev.adults + 1) }))}
                    disabled={bookingDetails.adults >= 6}
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <Baby className="h-4 w-4 text-pink-500" />
                  Children
                </Label>
                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full"
                    onClick={() => setBookingDetails(prev => ({ ...prev, children: Math.max(0, prev.children - 1) }))}
                    disabled={bookingDetails.children <= 0}
                  >
                    -
                  </Button>
                  <span className="text-xl font-bold w-8 text-center">{bookingDetails.children}</span>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full"
                    onClick={() => setBookingDetails(prev => ({ ...prev, children: Math.min(4, prev.children + 1) }))}
                    disabled={bookingDetails.children >= 4}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>

            {/* Total Guests Display */}
            <div className="bg-secondary/50 rounded-xl p-3 text-center">
              <span className="text-sm text-muted-foreground">Total Guests: </span>
              <span className="font-semibold">{bookingDetails.adults + bookingDetails.children} </span>
              <span className="text-xs text-muted-foreground">
                ({bookingDetails.adults} adult{bookingDetails.adults > 1 ? 's' : ''}{bookingDetails.children > 0 ? `, ${bookingDetails.children} child${bookingDetails.children > 1 ? 'ren' : ''}` : ''})
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              onClick={() => setIsBookingOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSendEnquiry}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white gap-2"
            >
              {/* WhatsApp Icon */}
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send Enquiry
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Rooms;
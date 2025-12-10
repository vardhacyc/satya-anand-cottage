import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Signal, Car, Coffee, Tv, Fan, Users, Calendar, Gem, BedDouble } from "lucide-react";

interface Room {
  id: number;
  name: string;
  gemName: string;
  description: string;
  capacity: string;
  bedType: string;
  amenities: string[];
  image: string;
  gemColor: string;
  gemBg: string;
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

  // 8 Gemstone-themed rooms from brochure
  const rooms: Room[] = [
    {
      id: 1,
      name: "Cateyes Room",
      gemName: "Cateyes",
      description: "A cozy double-bedded retreat with warm amber tones and stunning mountain views.",
      capacity: "2 Adults",
      bedType: "Double Bedded",
      amenities: ["Mountain View", "WiFi", "TV", "Tea/Coffee"],
      image: "/lovable-uploads/210e942e-c3b7-41c5-8153-d5801e026110.png",
      gemColor: "hsl(35, 60%, 45%)",
      gemBg: "hsl(35, 60%, 45%)"
    },
    {
      id: 2,
      name: "Ruby Room",
      gemName: "Ruby",
      description: "Elegant double-bedded room with rich ruby accents and romantic ambiance.",
      capacity: "2 Adults",
      bedType: "Double Bedded",
      amenities: ["Valley View", "WiFi", "TV", "Tea/Coffee"],
      image: "/lovable-uploads/a344e0f6-1cd8-4d5b-ac30-8c9170c82b73.png",
      gemColor: "hsl(0, 70%, 45%)",
      gemBg: "hsl(0, 70%, 45%)"
    },
    {
      id: 3,
      name: "Yellow Sapphire Room",
      gemName: "Yellow Sapphire",
      description: "Bright and spacious three-bedded room with golden sunshine vibes.",
      capacity: "3 Adults",
      bedType: "Three Bedded",
      amenities: ["Garden View", "WiFi", "TV", "Tea/Coffee", "Balcony"],
      image: "/lovable-uploads/074e847d-d7e1-4db0-9286-df033d8161f0.png",
      gemColor: "hsl(48, 85%, 55%)",
      gemBg: "hsl(48, 85%, 55%)"
    },
    {
      id: 4,
      name: "Pearls Room",
      gemName: "Pearls",
      description: "Serene three-bedded room with elegant cream tones and peaceful atmosphere.",
      capacity: "3 Adults",
      bedType: "Three Bedded",
      amenities: ["Mountain View", "WiFi", "TV", "Tea/Coffee"],
      image: "/lovable-uploads/210e942e-c3b7-41c5-8153-d5801e026110.png",
      gemColor: "hsl(40, 20%, 90%)",
      gemBg: "hsl(40, 20%, 85%)"
    },
    {
      id: 5,
      name: "Diamond Room",
      gemName: "Diamond",
      description: "Premium three-bedded room with crystal-clear aesthetics and luxury finishes.",
      capacity: "3 Adults",
      bedType: "Three Bedded",
      amenities: ["Panoramic View", "WiFi", "TV", "Tea/Coffee", "Premium Bedding"],
      image: "/lovable-uploads/a344e0f6-1cd8-4d5b-ac30-8c9170c82b73.png",
      gemColor: "hsl(0, 0%, 85%)",
      gemBg: "hsl(0, 0%, 80%)"
    },
    {
      id: 6,
      name: "Emerald Room",
      gemName: "Emerald",
      description: "Luxurious four-bedded family room with rich green accents and nature views.",
      capacity: "4 Adults",
      bedType: "Four Bedded",
      amenities: ["Forest View", "WiFi", "TV", "Tea/Coffee", "Extra Space"],
      image: "/lovable-uploads/074e847d-d7e1-4db0-9286-df033d8161f0.png",
      gemColor: "hsl(160, 50%, 40%)",
      gemBg: "hsl(160, 50%, 40%)"
    },
    {
      id: 7,
      name: "Blue Sapphire Room",
      gemName: "Blue Sapphire",
      description: "Spacious four-bedded room with calming blue tones and misty mountain views.",
      capacity: "4 Adults",
      bedType: "Four Bedded",
      amenities: ["Mountain View", "WiFi", "TV", "Tea/Coffee", "Sitting Area"],
      image: "/lovable-uploads/210e942e-c3b7-41c5-8153-d5801e026110.png",
      gemColor: "hsl(215, 70%, 50%)",
      gemBg: "hsl(215, 70%, 50%)"
    },
    {
      id: 8,
      name: "Coral Room",
      gemName: "Coral",
      description: "Warm four-bedded family room with vibrant coral accents and cozy atmosphere.",
      capacity: "4 Adults",
      bedType: "Four Bedded",
      amenities: ["Valley View", "WiFi", "TV", "Tea/Coffee", "Family Friendly"],
      image: "/lovable-uploads/a344e0f6-1cd8-4d5b-ac30-8c9170c82b73.png",
      gemColor: "hsl(15, 75%, 55%)",
      gemBg: "hsl(15, 75%, 55%)"
    }
  ];

  const handleBookRoom = (room: Room) => {
    setSelectedRoom(room);
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

💎 *Room:* ${selectedRoom.name} (${selectedRoom.bedType})

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
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Gem className="h-6 w-6 text-[hsl(38,75%,55%)]" />
            <span className="text-sm font-medium text-[hsl(38,75%,55%)] tracking-widest uppercase">The Gemstone Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            8 Unique Rooms
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[hsl(38,75%,55%)] to-transparent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each room is uniquely themed after precious gemstones, offering a distinctive experience with modern amenities.
          </p>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {rooms.map((room, index) => (
            <Card
              key={room.id}
              className="overflow-hidden border border-border/50 bg-card hover:border-[hsl(38,75%,55%)]/30 transition-all duration-500 hover:-translate-y-2 rounded-2xl group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleBookRoom(room)}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Gemstone Badge */}
                <div
                  className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5"
                  style={{
                    backgroundColor: `${room.gemBg}20`,
                    borderColor: `${room.gemColor}50`,
                    borderWidth: '1px',
                    color: room.gemColor
                  }}
                >
                  <Gem className="h-3 w-3" />
                  {room.gemName}
                </div>

                {/* Capacity Badge */}
                <Badge className="absolute top-3 right-3 bg-black/50 text-white border-0 text-xs">
                  {room.capacity}
                </Badge>

                {/* Bed Type */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/90 text-sm">
                  <BedDouble className="h-4 w-4" />
                  {room.bedType}
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">{room.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{room.description}</p>

                <Button
                  className="w-full bg-gradient-to-r from-[hsl(38,75%,55%)] to-[hsl(38,70%,45%)] hover:from-[hsl(38,80%,60%)] hover:to-[hsl(38,75%,50%)] text-[hsl(220,20%,7%)] font-semibold"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookRoom(room);
                  }}
                >
                  Enquire Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Amenities Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-foreground mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            All Rooms Include
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Signal, name: "Free WiFi" },
              { icon: Car, name: "Free Parking" },
              { icon: Coffee, name: "Tea/Coffee" },
              { icon: Tv, name: "Television" },
              { icon: Fan, name: "AC/Fan" },
              { icon: Users, name: "Room Service" }
            ].map((amenity, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full border border-border/50"
              >
                <amenity.icon className="h-4 w-4 text-[hsl(38,75%,55%)]" />
                <span className="text-sm text-foreground">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-foreground">
              <Gem className="h-5 w-5" style={{ color: selectedRoom?.gemColor }} />
              Book {selectedRoom?.name}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selectedRoom?.bedType} • {selectedRoom?.capacity}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="checkIn" className="text-foreground">Check-in</Label>
                <div className="relative mt-1">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="checkIn"
                    type="date"
                    value={bookingDetails.checkIn}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, checkIn: e.target.value })}
                    className="pl-10 bg-background border-border text-foreground"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="checkOut" className="text-foreground">Check-out</Label>
                <div className="relative mt-1">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="checkOut"
                    type="date"
                    value={bookingDetails.checkOut}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, checkOut: e.target.value })}
                    className="pl-10 bg-background border-border text-foreground"
                  />
                </div>
              </div>
            </div>

            {/* Guests */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-foreground">Adults</Label>
                <div className="flex items-center gap-2 mt-1">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 border-border"
                    onClick={() => setBookingDetails({ ...bookingDetails, adults: Math.max(1, bookingDetails.adults - 1) })}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center text-foreground">{bookingDetails.adults}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 border-border"
                    onClick={() => setBookingDetails({ ...bookingDetails, adults: Math.min(4, bookingDetails.adults + 1) })}
                  >
                    +
                  </Button>
                </div>
              </div>
              <div>
                <Label className="text-foreground">Children</Label>
                <div className="flex items-center gap-2 mt-1">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 border-border"
                    onClick={() => setBookingDetails({ ...bookingDetails, children: Math.max(0, bookingDetails.children - 1) })}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center text-foreground">{bookingDetails.children}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 border-border"
                    onClick={() => setBookingDetails({ ...bookingDetails, children: Math.min(3, bookingDetails.children + 1) })}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-secondary/50 p-4 rounded-xl border border-border/50">
              <p className="text-sm text-muted-foreground mb-2">Booking Summary</p>
              <div className="flex justify-between text-foreground">
                <span>{calculateNights()} night{calculateNights() > 1 ? 's' : ''}</span>
                <span className="text-[hsl(38,75%,55%)] font-medium">Contact for rates</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 border-border"
              onClick={() => setIsBookingOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 bg-gradient-to-r from-[hsl(38,75%,55%)] to-[hsl(38,70%,45%)] text-[hsl(220,20%,7%)] font-semibold"
              onClick={handleSendEnquiry}
            >
              Send Enquiry via WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Rooms;
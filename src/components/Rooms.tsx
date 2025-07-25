import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wifi, Car, Coffee, Tv, Wind, Users, Bed, Bath } from "lucide-react";
import cottageRoom from "@/assets/cottage-room.jpg";

const Rooms = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const rooms = [
    {
      id: 1,
      name: "Deluxe Mountain View",
      description: "Spacious room with panoramic mountain views, perfect for couples seeking tranquility.",
      price: "₹3,500",
      capacity: "2 Adults",
      size: "350 sq ft",
      amenities: ["Mountain View", "AC", "WiFi", "Tea/Coffee", "TV", "Balcony"],
      features: ["1 King Bed", "1 Bathroom", "Private Balcony"]
    },
    {
      id: 2,
      name: "Family Suite",
      description: "Large suite with separate living area, ideal for families with children.",
      price: "₹5,500",
      capacity: "4 Adults + 2 Children",
      size: "550 sq ft",
      amenities: ["Valley View", "AC", "WiFi", "Kitchenette", "TV", "Dining Area"],
      features: ["2 Bedrooms", "2 Bathrooms", "Living Room", "Kitchenette"]
    },
    {
      id: 3,
      name: "Standard Cottage Room",
      description: "Cozy and comfortable room with garden views and all essential amenities.",
      price: "₹2,500",
      capacity: "2 Adults",
      size: "280 sq ft",
      amenities: ["Garden View", "Fan", "WiFi", "Tea/Coffee", "Shared Balcony"],
      features: ["1 Queen Bed", "1 Bathroom", "Garden Access"]
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
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden border-0 shadow-soft hover:shadow-mountain transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={cottageRoom} 
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
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
                      {room.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={scrollToContact} 
                  className="w-full shadow-soft"
                >
                  Book This Room
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Amenities */}
        <div className="bg-card rounded-3xl p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-card-foreground text-center mb-8">
            All Rooms Include
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {allAmenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-mountain-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <amenity.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">{amenity.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
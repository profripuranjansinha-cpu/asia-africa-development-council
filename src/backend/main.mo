import Map "mo:core/Map";
import List "mo:core/List";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";

actor {

  public type Event = {
    title : Text;
    description : Text;
    date : Text;
    location : Text;
  };

  public type InquiryType = {
    #membership;
    #donation;
    #collaboration;
    #general;
  };

  public type Inquiry = {
    name : Text;
    email : Text;
    organization : Text;
    message : Text;
    inquiryType : InquiryType;
    timestamp : Time.Time;
  };

  type AboutContent = {
    mission : Text;
    vision : Text;
    about : Text;
    values : Text;
  };

  module Event {
    public func compare(a : Event, b : Event) : Order.Order {
      Text.compare(a.date, b.date);
    };
  };

  let events = List.empty<Event>();
  let inquiries = Map.empty<Text, Inquiry>();
  var aboutContent : ?AboutContent = null;

  public shared ({ caller }) func initializeContent(mission : Text, vision : Text, about : Text, values : Text) : async () {
    if (aboutContent != null) { Runtime.trap("Content already initialized") };
    aboutContent := ?{
      mission;
      vision;
      about;
      values;
    };
  };

  public shared ({ caller }) func addEvent(title : Text, description : Text, date : Text, location : Text) : async () {
    let event : Event = {
      title;
      description;
      date;
      location;
    };
    events.add(event);
  };

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, organization : Text, message : Text, inquiryType : InquiryType) : async Inquiry {
    let inquiry : Inquiry = {
      name;
      email;
      organization;
      message;
      inquiryType;
      timestamp = Time.now();
    };
    inquiries.add(email, inquiry);
    inquiry;
  };

  public query ({ caller }) func getAboutContent() : async AboutContent {
    switch (aboutContent) {
      case (null) { Runtime.trap("Content not found") };
      case (?content) { content };
    };
  };

  public query ({ caller }) func getEvents() : async [Event] {
    events.toArray().sort();
  };

  public query ({ caller }) func getInquiries() : async [Inquiry] {
    inquiries.values().toArray();
  };
};

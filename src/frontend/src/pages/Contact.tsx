import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitInquiry } from "@/hooks/useQueries";
import {
  Building,
  CheckCircle,
  Globe,
  Handshake,
  Heart,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import { useState } from "react";
import { InquiryType } from "../backend";

const inquiryTypes = [
  {
    value: InquiryType.collaboration,
    label: "Collaboration",
    icon: Handshake,
    desc: "Partner on programs and initiatives",
  },
  {
    value: InquiryType.membership,
    label: "Membership",
    icon: Users,
    desc: "Join our global network",
  },
  {
    value: InquiryType.donation,
    label: "Donation",
    icon: Heart,
    desc: "Support our mission financially",
  },
  {
    value: InquiryType.general,
    label: "General Inquiry",
    icon: Mail,
    desc: "Any other questions",
  },
];

const partnershipTypes = [
  {
    icon: Building,
    title: "Government Partners",
    desc: "Collaborate with AADC on national development programs aligned with UN SDG 2030, AU Agenda 2063, and Vision India 2047.",
    color: "border-t-forest-700",
  },
  {
    icon: Globe,
    title: "International Organizations",
    desc: "Join our network of UN agencies, multilateral organizations, and international NGOs working for global development.",
    color: "border-t-gold-500",
  },
  {
    icon: Users,
    title: "Civil Society",
    desc: "Grassroots organizations, community groups, and advocacy networks are the backbone of our programs.",
    color: "border-t-terracotta-500",
  },
  {
    icon: Handshake,
    title: "Private Sector",
    desc: "Businesses committed to ESG and sustainable development can partner with AADC for impactful CSR initiatives.",
    color: "border-t-chart-4",
  },
];

export function Contact() {
  const [selectedType, setSelectedType] = useState<InquiryType>(
    InquiryType.general,
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const submitInquiry = useSubmitInquiry();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    try {
      await submitInquiry.mutateAsync({
        name: formData.name,
        email: formData.email,
        organization: formData.organization,
        message: formData.message,
        inquiryType: selectedType,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to submit inquiry:", err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col" data-ocid="contact.page">
      {/* ── Page Hero ── */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-12 bg-gold-500" />
              <span className="text-gold-400 text-sm font-medium tracking-widest uppercase">
                Get Involved
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Contact &
              <br />
              <span className="text-gold-400">Partnership</span>
            </h1>
            <p className="text-forest-200 text-lg md:text-xl font-crimson italic leading-relaxed">
              Join the global movement for innovation, peace, and sustainable
              development. Together, we can build a better future for Asia,
              Africa, and the world.
            </p>
          </div>
        </div>
      </section>

      {/* ── Partnership Types ── */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-16 bg-gold-500" />
              <span className="text-gold-600 text-sm font-medium tracking-widest uppercase">
                Partnership Opportunities
              </span>
              <div className="h-px w-16 bg-gold-500" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              How You Can Partner With Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AADC welcomes partnerships from all sectors committed to advancing
              sustainable development, peace, and innovation across Asia and
              Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {partnershipTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Card
                  key={type.title}
                  className={`pillar-card ${type.color} card-hover shadow-card`}
                >
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-forest-50 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-forest-700" />
                    </div>
                    <h3 className="font-serif font-bold text-forest-800 mb-2">
                      {type.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {type.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form + Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card" data-ocid="contact.form_card">
                <CardContent className="p-8">
                  {submitted ? (
                    <div
                      className="text-center py-12"
                      data-ocid="contact.success_state"
                    >
                      <div className="w-20 h-20 rounded-full bg-forest-50 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-forest-600" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-forest-800 mb-3">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        Your inquiry has been successfully submitted.
                      </p>
                      <p className="text-muted-foreground text-sm mb-8">
                        Our team will review your message and get back to you
                        within 3-5 business days.
                      </p>
                      <Badge className="bg-forest-100 text-forest-800 border-forest-200 text-sm px-4 py-1.5">
                        Inquiry Received ✓
                      </Badge>
                      <div className="mt-8">
                        <Button
                          variant="outline"
                          data-ocid="contact.submit_another_button"
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({
                              name: "",
                              email: "",
                              organization: "",
                              message: "",
                            });
                            setSelectedType(InquiryType.general);
                          }}
                          className="border-forest-300 text-forest-700 hover:bg-forest-50"
                        >
                          Submit Another Inquiry
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      data-ocid="contact.form"
                    >
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-forest-800 mb-1">
                          Send Us a Message
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Fill out the form below and our team will be in touch.
                        </p>
                      </div>

                      {/* Inquiry Type */}
                      <div>
                        <Label className="text-forest-700 font-medium mb-3 block">
                          Inquiry Type
                        </Label>
                        <div className="grid grid-cols-2 gap-3">
                          {inquiryTypes.map((type) => {
                            const Icon = type.icon;
                            return (
                              <button
                                key={type.value}
                                type="button"
                                data-ocid={`contact.inquiry_type.${type.value}`}
                                onClick={() => setSelectedType(type.value)}
                                className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all ${
                                  selectedType === type.value
                                    ? "border-forest-600 bg-forest-50 text-forest-800"
                                    : "border-border text-muted-foreground hover:border-forest-300 hover:bg-muted/50"
                                }`}
                              >
                                <Icon
                                  size={18}
                                  className={
                                    selectedType === type.value
                                      ? "text-forest-600"
                                      : "text-muted-foreground"
                                  }
                                />
                                <div>
                                  <div className="text-sm font-medium">
                                    {type.label}
                                  </div>
                                  <div className="text-xs opacity-70">
                                    {type.desc}
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="name"
                            className="text-forest-700 font-medium"
                          >
                            Full Name{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                            data-ocid="contact.name_input"
                            className="border-border focus:border-forest-500"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="email"
                            className="text-forest-700 font-medium"
                          >
                            Email Address{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                            data-ocid="contact.email_input"
                            className="border-border focus:border-forest-500"
                          />
                        </div>
                      </div>

                      {/* Organization */}
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="organization"
                          className="text-forest-700 font-medium"
                        >
                          Organization / Institution
                        </Label>
                        <Input
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="Your organization name"
                          data-ocid="contact.organization_input"
                          className="border-border focus:border-forest-500"
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="message"
                          className="text-forest-700 font-medium"
                        >
                          Message <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your interest in partnering with AADC, your organization's goals, and how you'd like to collaborate..."
                          rows={5}
                          required
                          data-ocid="contact.message_textarea"
                          className="border-border focus:border-forest-500 resize-none"
                        />
                      </div>

                      {/* Error */}
                      {submitInquiry.isError && (
                        <p
                          className="text-destructive text-sm"
                          data-ocid="contact.error_state"
                        >
                          Failed to submit inquiry. Please try again.
                        </p>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        disabled={submitInquiry.isPending}
                        data-ocid="contact.submit_button"
                        className="w-full bg-forest-700 hover:bg-forest-600 text-white border-0"
                      >
                        {submitInquiry.isPending ? (
                          <span
                            className="flex items-center gap-2"
                            data-ocid="contact.loading_state"
                          >
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Submitting...
                          </span>
                        ) : (
                          "Submit Inquiry"
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-forest-800 text-lg mb-5">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-forest-50 flex items-center justify-center flex-shrink-0">
                        <Globe size={16} className="text-forest-600" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">
                          Website
                        </p>
                        <a
                          href="https://www.asiafricaonline.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-forest-700 hover:text-forest-600 text-sm font-medium"
                          data-ocid="contact.asiaafrica_link"
                        >
                          asiafricaonline.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-forest-50 flex items-center justify-center flex-shrink-0">
                        <Globe size={16} className="text-forest-600" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">
                          India Initiative
                        </p>
                        <a
                          href="https://www.samridhbharat.net"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-forest-700 hover:text-forest-600 text-sm font-medium"
                          data-ocid="contact.samridh_link"
                        >
                          samridhbharat.net
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-forest-50 flex items-center justify-center flex-shrink-0">
                        <Mail size={16} className="text-forest-600" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">
                          General Inquiries
                        </p>
                        <a
                          href="mailto:info@asiafricaonline.com"
                          className="text-forest-700 hover:text-forest-600 text-sm font-medium"
                        >
                          info@asiafricaonline.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-forest-50 flex items-center justify-center flex-shrink-0">
                        <MapPin size={16} className="text-forest-600" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">
                          Headquarters
                        </p>
                        <p className="text-forest-700 text-sm font-medium">
                          Asia Africa Development Council
                          <br />
                          International Secretariat
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-forest-50 border-forest-200">
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-forest-800 text-base mb-3">
                    Global Frameworks We Support
                  </h3>
                  <div className="space-y-2">
                    {[
                      "UN Sustainable Development Agenda 2030",
                      "African Union Agenda 2063",
                      "India Growth Index",
                      "Vision India 2047",
                    ].map((framework) => (
                      <div
                        key={framework}
                        className="flex items-center gap-2 text-sm text-forest-700"
                      >
                        <span className="text-gold-600">◆</span>
                        {framework}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-terracotta-500 border-0">
                <CardContent className="p-6 text-center">
                  <Phone size={28} className="text-white mx-auto mb-3" />
                  <h3 className="font-serif font-bold text-white text-base mb-2">
                    Urgent Partnership Inquiries
                  </h3>
                  <p className="text-terracotta-100 text-xs leading-relaxed">
                    For time-sensitive partnership discussions, please indicate
                    "URGENT" in your message subject.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

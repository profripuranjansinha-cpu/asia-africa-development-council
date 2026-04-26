import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface AboutContent {
    about: string;
    mission: string;
    values: string;
    vision: string;
}
export interface Inquiry {
    inquiryType: InquiryType;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    organization: string;
}
export type Time = bigint;
export interface Event {
    title: string;
    date: string;
    description: string;
    location: string;
}
export enum InquiryType {
    donation = "donation",
    collaboration = "collaboration",
    membership = "membership",
    general = "general"
}
export interface backendInterface {
    addEvent(title: string, description: string, date: string, location: string): Promise<void>;
    getAboutContent(): Promise<AboutContent>;
    getEvents(): Promise<Array<Event>>;
    getInquiries(): Promise<Array<Inquiry>>;
    initializeContent(mission: string, vision: string, about: string, values: string): Promise<void>;
    submitInquiry(name: string, email: string, organization: string, message: string, inquiryType: InquiryType): Promise<Inquiry>;
}

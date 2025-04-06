
import { Notification } from "./custom-types";

export const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "New AI Models Available",
    message: "15 new AI models have been added to the platform from Hugging Face.",
    read: false,
    date: "1h ago",
    type: "update"
  },
  {
    id: "2",
    title: "Weekly Digest Sent",
    message: "Your personalized weekly AI digest has been delivered to your email.",
    read: false,
    date: "Yesterday",
    type: "digest"
  },
  {
    id: "3",
    title: "Subscription Reminder",
    message: "Your Pro+ subscription will renew in 3 days. Please ensure your payment method is up to date.",
    read: true,
    date: "2 days ago",
    type: "subscription"
  },
  {
    id: "4",
    title: "Popular Paper in Your Interest",
    message: "A new paper on 'Efficient Fine-Tuning for LLMs' is trending in your areas of interest.",
    read: true,
    date: "1 week ago",
    type: "update"
  },
  {
    id: "5",
    title: "Feature Update",
    message: "We've added a new AI Summarizer tool to help you digest research papers faster.",
    read: true,
    date: "2 weeks ago",
    type: "update"
  }
];

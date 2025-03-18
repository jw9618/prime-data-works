declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = 'G-XXXXXXXX';

// Safe implementation of pageview tracking
export const pageview = (url: string) => {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      });
    }
  } catch (error) {
    console.warn('Google Analytics pageview error:', error);
  }
};

// Safe implementation of event tracking
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  } catch (error) {
    console.warn('Google Analytics event error:', error);
  }
};
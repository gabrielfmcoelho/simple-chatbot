import umami from "@umami/node";

type UmamiTrackType = {
  name: string;
  url?: string;
};

umami.init({
  websiteId: "c37edc28-ee5f-4c62-9ce3-377fa6f600a8",
  hostUrl: "https://cloud.umami.is"
});

export const umamiTrack = (data: UmamiTrackType) => {
  return umami.track({
    ...data,
    hostname: window.location.hostname,
    screen: `${window.screen.width}x${window.screen.height}`,
    language: navigator.language,
    title: document.title,
    url: window.location.pathname
  });
};

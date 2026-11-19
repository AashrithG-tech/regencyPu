
export interface GalleryImage {
    src: string;
    alt: string;
    category: string;
}

export const galleryImages: GalleryImage[] = [];

// When real photos arrive, add them like this:
//
// {
//   src: "/images/campus/main-building.webp",
//   alt: "Regency PU College main building",
//   category: "Campus",
// }

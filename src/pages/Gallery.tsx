
import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";

import Reveal from "../components/Reveal";
import { galleryImages } from "../data/gallery";

function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = [
        "All",
        ...new Set(galleryImages.map((image) => image.category)),
    ];

    const filteredImages =
        activeCategory === "All"
            ? galleryImages
            : galleryImages.filter(
                (image) => image.category === activeCategory
            );

    return (
        <main>
            <section className="bg-regency-cream py-24 md:py-32">
                <div className="container-width">
                    <Reveal>
                        <p className="text-regency-rose uppercase tracking-[0.25em] text-xs font-semibold mb-6">
                            Our Gallery
                        </p>

                        <h1 className="font-heading text-5xl md:text-7xl text-regency-burgundy">
                            Moments at
                            <span className="italic text-regency-rose">
                {" "}Regency.
              </span>
                        </h1>

                        <p className="text-regency-ink/70 leading-8 mt-8 max-w-2xl">
                            A visual collection of campus life, learning
                            experiences and activities at Regency PU College.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-width">

                    {galleryImages.length > 0 ? (
                        <>
                            <div className="flex flex-wrap gap-3 mb-12">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => setActiveCategory(category)}
                                        aria-pressed={activeCategory === category}
                                        className={`px-5 py-2 rounded-full text-sm transition-colors ${
                                            activeCategory === category
                                                ? "bg-regency-burgundy text-white"
                                                : "bg-regency-cream text-regency-ink"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredImages.map((image) => (
                                    <Reveal key={image.src}>
                                        <div className="group overflow-hidden rounded-2xl bg-regency-cream">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                loading="lazy"
                                                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="p-5">
                                                <p className="text-sm text-regency-burgundy font-medium">
                                                    {image.category}
                                                </p>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </>
                    ) : (
                        <Reveal>
                            <div className="max-w-2xl mx-auto text-center py-20 px-6 bg-regency-cream rounded-3xl border border-regency-burgundy/10">

                                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto">
                                    <ImageIcon
                                        size={34}
                                        strokeWidth={1.4}
                                        className="text-regency-burgundy"
                                    />
                                </div>

                                <h2 className="font-heading text-3xl text-regency-burgundy mt-8">
                                    Our Photo Collection
                                </h2>

                                <p className="text-regency-ink/70 leading-8 mt-4">
                                    We're preparing a collection of photographs
                                    showcasing the Regency campus and student life.
                                    Please check back soon.
                                </p>

                            </div>
                        </Reveal>
                    )}

                </div>
            </section>
        </main>
    );
}

export default Gallery;

"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FormattedText from "../ui/FormattedText";
import { EASE_PREMIUM } from "../v2/motion";

export type OverviewMediaBlock = {
  text: string;
  image: string;
  label?: string;
};

type OverviewMediaCardsProps = {
  blocks: OverviewMediaBlock[];
};

function OverviewMediaCards({ blocks }: OverviewMediaCardsProps) {
  if (blocks.length === 0) return null;

  return (
    <div className="mvp-about-text mvp-about-text-full mvp-about-text--media">
      {blocks.map((block, index) => {
        const reverse = index % 2 === 1;

        return (
          <motion.article
            key={`${block.image}-${index}`}
            className={`mvp-about-media-card${reverse ? " mvp-about-media-card--reverse" : ""}`}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: Math.min(index * 0.05, 0.2),
              ease: EASE_PREMIUM,
            }}
          >
            <div className="mvp-about-media-visual" aria-hidden>
              <Image
                src={block.image}
                alt=""
                fill
                sizes="(max-width: 720px) 92vw, 320px"
                className="mvp-about-media-img"
              />
              <span className="mvp-about-media-veil" />
            </div>

            <div className="mvp-about-media-body">
              <span className="mvp-about-media-index" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              {block.label ? <h3 className="mvp-about-media-label">{block.label}</h3> : null}
              <div className="mvp-about-media-copy">
                <FormattedText text={block.text} />
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}

export default memo(OverviewMediaCards);

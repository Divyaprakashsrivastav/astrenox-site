"use client";

const PROJECT_PHOTOS: Record<string, string> = {
  carelink: "/images/projects/carelink.png",
  estateflow: "/images/projects/estateflow.png",
  buildsync: "/images/projects/buildsync.png",
  tendervault: "/images/projects/tendervault.png",
  visionops: "/images/projects/visionops.png",
  flowchain: "/images/projects/flowchain.png",
  dealcore: "/images/projects/dealcore.png",
};

type ProjectBentoVisualProps = {
  id: string;
  active: boolean;
};

export default function ProjectBentoVisual({ id, active }: ProjectBentoVisualProps) {
  const src = PROJECT_PHOTOS[id];
  const cls = `prj-visual prj-visual--${id} prj-visual--photo${active ? " is-active" : ""}`;

  if (!src) {
    return <div className={cls} aria-hidden />;
  }

  return (
    <div className={cls} aria-hidden>
      <div className="prj-bento-photo-box">
        <img src={src} alt="" className="prj-visual-photo" />
      </div>
    </div>
  );
}

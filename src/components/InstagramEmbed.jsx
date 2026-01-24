import { useEffect } from "react";

export default function InstagramEmbed({ url }) {
  useEffect(() => {
    if (window.instgrm) window.instgrm.Embeds.process();
  }, [url]);

  return (
    <div className="flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ maxWidth: "540px", width: "100%" }}
      ></blockquote>
    </div>
  );
}

import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "angular",
  "vuedotjs",
  "flutter",
  "android",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "github",
  "solidity",
  "rust",
  "web3dotjs",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;

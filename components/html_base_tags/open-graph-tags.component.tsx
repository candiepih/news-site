interface OpenGraphTagsProps {
  title: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
}

const OpenGraphTags: React.FC<OpenGraphTagsProps> = ({
  title,
  description,
  imageUrl,
  websiteUrl,
}) => {
  return (
    <>
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content={imageUrl} />
      <meta
        property="twitter:domain"
        content={websiteUrl.replace("https://", "")}
      />
      <meta property="twitter:url" content={websiteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  );
};

export default OpenGraphTags;

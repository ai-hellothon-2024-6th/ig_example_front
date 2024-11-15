interface InfoProps {
  title: string;
  content?: string;
  url?: string;
}

export const ImageWithH3 = ({ title, url }: InfoProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={url} alt={title} />
    </div>
  );
};

export const CodeWithH3 = ({ title, content }: InfoProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <code>{content}</code>
    </div>
  );
};

export const CodeWithH2 = ({ title, content }: InfoProps) => {
  return (
    <>
      <h2>{title}</h2>
      <code>{content}</code>
    </>
  );
};

export default {
  ImageWithH3,
  CodeWithH3,
  CodeWithH2,
};

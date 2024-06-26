import PropTypes from "prop-types";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center my-8">
      <p className="text-sm font-extralight text-orange-400 my-9">{subtitle}</p>
      <h3 className="text-2xl font-bold border text-black border-x-0  inline border-y-[#E8E8E8] p-2">
        {title}
      </h3>
    </div>
  );
}
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

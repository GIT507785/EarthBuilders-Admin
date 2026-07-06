interface Props {
  onClick: () => void;
}

const RunReportButton = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-lg h-10 flex items-center justify-center mt-7 cursor-pointer bg-emerald-700 py-3 font-semibold text-white transition hover:bg-emerald-600"
    >
      has
    </button>
  );
};

export default RunReportButton;
const PHONE = "01094134686";
const DISPLAY_PHONE = "010-9413-4686";

export default function CallBar() {
  return (
    <div className="globalCallBar">
      <div className="globalCallText">
        <span>707 SKY</span>

        <strong>
          {DISPLAY_PHONE}
        </strong>
      </div>

      <a
        href={`tel:${PHONE}`}
        className="globalCallButton"
        aria-label="707스카이 전화상담"
      >
        전화상담
      </a>
    </div>
  );
}

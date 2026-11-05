"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "707sky-price-popup-hide-date";

function getTodayKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function PricePopup() {
  const [open, setOpen] = useState(false);
  const [hideToday, setHideToday] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const today = getTodayKey();

    if (saved !== today) {
      setOpen(true);
    }
  }, []);

  const closePopup = () => {
    if (hideToday) {
      localStorage.setItem(STORAGE_KEY, getTodayKey());
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <>
      <style>{`
        .price-popup-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .price-popup-wrap {
          width: 100%;
          max-width: 520px;
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(0,0,0,0.35);
        }

        .price-popup-top {
          position: relative;
          background: #f7f7f3;
        }

        .price-popup-image {
          display: block;
          width: 100%;
          height: auto;
        }

        .price-popup-close {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 40px;
          height: 40px;
          border: none;
          border-radius: 999px;
          background: rgba(17, 17, 17, 0.82);
          color: #fff;
          font-size: 22px;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .price-popup-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 16px;
          border-top: 1px solid #ecece6;
          background: #11140f;
          color: #fff;
        }

        .price-popup-check {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          cursor: pointer;
          user-select: none;
        }

        .price-popup-check input {
          width: 18px;
          height: 18px;
          accent-color: #98a768;
        }

        .price-popup-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .price-popup-call,
        .price-popup-hide {
          min-height: 42px;
          padding: 0 14px;
          border: none;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
        }

        .price-popup-call {
          background: #98a768;
          color: #11140f;
        }

        .price-popup-hide {
          background: #2d3327;
          color: #fff;
        }

        @media (max-width: 520px) {
          .price-popup-wrap {
            max-width: 100%;
            border-radius: 14px;
          }

          .price-popup-bottom {
            flex-direction: column;
            align-items: stretch;
          }

          .price-popup-actions {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .price-popup-call,
          .price-popup-hide {
            width: 100%;
          }

          .price-popup-check {
            width: 100%;
            justify-content: flex-start;
          }
        }
      `}</style>

      <div className="price-popup-overlay">
        <div className="price-popup-wrap">
          <div className="price-popup-top">
            <img
              src="/IMG_2263.jpeg"
              alt="707스카이 단가표"
              className="price-popup-image"
            />

            <button
              type="button"
              className="price-popup-close"
              onClick={closePopup}
              aria-label="팝업 닫기"
            >
              ×
            </button>
          </div>

          <div className="price-popup-bottom">
            <label className="price-popup-check">
              <input
                type="checkbox"
                checked={hideToday}
                onChange={(e) => setHideToday(e.target.checked)}
              />
              <span>오늘 하루 열지 않기</span>
            </label>

            <div className="price-popup-actions">
              <a
                href="tel:01094134686"
                className="price-popup-call"
              >
                전화상담
              </a>

              <button
                type="button"
                className="price-popup-hide"
                onClick={closePopup}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

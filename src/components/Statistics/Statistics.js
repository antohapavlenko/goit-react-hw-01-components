import React from 'react';
import s from './Statistics.module.css';

function setBg() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {{ title } && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            className={s.item}
            key={stat.id}
            style={{ backgroundColor: setBg() }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

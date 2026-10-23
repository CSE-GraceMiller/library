import "./Filter.css";

import ageIcon from "./images/filter-age-group.png";
import genreIcon from "./images/filter-genre-tag.png";

function Filters() {
  return (
    <aside className="filters">
      <h2 className="filters-title">Filter Books</h2>

      <div className="filter-group">
        <h3><img src={ageIcon} alt="" className="filter-icon-img" /> Age Group</h3>
        <label className="filter-option"><input type="checkbox" defaultChecked /> All Ages</label>
        <label className="filter-option"><input type="checkbox" /> 0-5 (Early Learners)</label>
        <label className="filter-option"><input type="checkbox" /> 6-8 (Children)</label>
        <label className="filter-option"><input type="checkbox" /> 9-12 (Tweens)</label>
        <label className="filter-option"><input type="checkbox" /> 13+ (Teens)</label>
      </div>

      <div className="filter-group">
        <h3><img src={genreIcon} alt="" className="filter-icon-img" />Genre</h3>
        <label className="filter-option"><input type="checkbox" defaultChecked /> All Genres</label>
        <label className="filter-option"><input type="checkbox" /> Adventure</label>
        <label className="filter-option"><input type="checkbox" /> Fantasy</label>
        <label className="filter-option"><input type="checkbox" /> Friendship</label>
        <label className="filter-option"><input type="checkbox" /> Mystery</label>
        <label className="filter-option"><input type="checkbox" /> Science</label>
        <label className="filter-option"><input type="checkbox" /> Non-fiction</label>
      </div>
    </aside>
  );
}

export default Filters;
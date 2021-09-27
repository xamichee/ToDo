import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

function ItemCreated({ date }) {
  ItemCreated.propTypes = {
    date: PropTypes.number.isRequired,
  };

  const formattedDate = formatDistanceToNow(date, { addSuffix: true, includeSeconds: true });

  const [created, setCreated] = useState(formattedDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setCreated(formatDistanceToNow(date, { addSuffix: true, includeSeconds: true }));
    }, 5000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <div className="created">
      <span className="description">{created}</span>
    </div>
  );
}

export default ItemCreated;

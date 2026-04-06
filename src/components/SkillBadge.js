import React from 'react';
import { Badge } from 'react-bootstrap';

const SkillBadge = ({ skill, variant = 'secondary' }) => {
  return (
    <Badge 
      bg={variant} 
      className="skill-badge"
      pill
    >
      {skill}
    </Badge>
  );
};

export default SkillBadge;

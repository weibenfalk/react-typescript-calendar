import React from 'react';
// Types
import { HatchType } from '../../helpers';
// Styles
import { StyledHatch } from './Hatch.styles';

type Props = {
  hatchData: HatchType;
  handleClick: (nr: number) => void;
};

const Hatch: React.FC<Props> = ({
  hatchData: { nr, text, img, open },
  handleClick
}) => (
  <StyledHatch open={open} background={img} onClick={() => handleClick(nr)}>
    <div className='front'>
      <p>{nr}</p>
    </div>
    <div className='back'>
      <p>{text}</p>
    </div>
  </StyledHatch>
);

export default Hatch;

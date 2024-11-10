import React from 'react';

const hexToRgba = (hex, opacity) => {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return `rgba(${(c >> 16) & 255}, ${(c >> 8) & 255}, ${c & 255}, ${opacity})`;
    }
    return hex;
  };

function Progress({ percentageCompleted, color = '#4caf50', text }) {
  const barContainerStyle = {
    width: '100%',
    height: '10px',
    backgroundColor: hexToRgba(color, 0.4),
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const barStyle = {
    width: `${percentageCompleted}%`,
    height: '100%',
    backgroundColor: color,
    borderRadius: '8px',
  };

  const textStyle = {
    fontWeight: 900,
    fontSize: '16px',
    color: color

  }

  return (
    <div className='flex flex-col gap-2 w-[100%]'>
        <h1 className='text-gray-600 text-[16px] '>{text}</h1>

        <div className='flex gap-4 items-center' >
            <div  style={barContainerStyle}>
                <div style={barStyle} ></div>
            </div>

            <span style={textStyle} >{percentageCompleted}%</span>
        </div>
    </div>
  );
}

export default Progress;

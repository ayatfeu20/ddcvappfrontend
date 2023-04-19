import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Technologies = (props) => {
  const [other, setother] = useState('');
  const otherRef = useRef(null);
  const techRef = useRef(null);
  const errorRef = useRef(null);
  const paddingRef = useRef(null);

  const CurrentOtherRef = otherRef.current;
  const errorTech = techRef.current;
  const errorMessage = errorRef.current;
  const addPadding = paddingRef.current;

  const addTech = (e) => {
    e.preventDefault();
    if (e.target.value === '') {
      CurrentOtherRef.classList.add('d-block');
      CurrentOtherRef.classList.remove('d-none');
    } else if (e.target.value === 'technologies') {
      errorTech.classList.remove('validate');
      errorMessage.classList.add('d-none');
      errorMessage.classList.remove('d-block');
      CurrentOtherRef.classList.remove('d-block');
      CurrentOtherRef.classList.add('d-none');
    } else {
      const exists = props.technologies.some(
        (t) =>
          t.techtools?.toLowerCase()?.trim() ===
          e.target.value?.toLowerCase()?.trim()
      );
      if (!exists)
        props.TechArray([
          ...props.technologies,
          { techtools: e.target.value, key_id: uuidv4() },
        ]);
      CurrentOtherRef.classList.remove('d-block');
      CurrentOtherRef.classList.add('d-none');
      errorTech.classList.remove('validate');
      errorMessage.classList.add('d-none');
      errorMessage.classList.remove('d-block');
    }
  };

  const onOtherChange = (e) => {
    e.preventDefault();
    setother(e.target.value);
  };
  const addOther = (e) => {
    e.preventDefault();
    if (other === '') {
      errorTech.classList.add('validate');
      errorMessage.classList.add('d-block');
      errorMessage.classList.remove('d-none');

      addPadding.classList.add('p');
    } else {
      const exists = props.technologies.some(
        (t) =>
          t.techtools?.toLowerCase()?.trim() === other?.toLowerCase()?.trim()
      );
      if (!exists)
        props.TechArray([
          ...props.technologies,
          { techtools: other, key_id: uuidv4() },
        ]);
      setother('');
      errorTech.classList.remove('validate');
      errorMessage.classList.add('d-none');
      errorMessage.classList.remove('d-block');
    }
  };
  const handleClick = (tech_id, tech) => {
    const updateTechState = props.technologies.filter(
      (x) => x.key_id !== tech_id
    );
    props.TechArray(updateTechState);
  };

  return (
    <div>
      <div className='mt-5 d-flex justify-content-center justify-content-md-end'>
        <div className='profile card row'>
          <div className='col mt-5 mb-5 d-flex flex-column flex-lg-row justify-content-end'>
            <div className='col-12 col-lg-4 d-flex flex-column mb-5 '>
              <div className='d-flex justify-content-center'>
                <h6 className=' project-color mb-3'>Technologies</h6>
              </div>
              <div className='d-flex justify-content-center'>
                <select
                  defaultValue='Technologies'
                  onChange={addTech}
                  className='pe-3 ps-3 pt-2 pb-2 project-color-grey techs'
                  id='technologies'
                >
                  <option value='technologies'>-Technologies-</option>
                  <option value='HTML5'>HTML5</option>
                  <option value='CSS3'>CSS3</option>
                  <option value='C#'>C#</option>
                  <option value='C++'>C++</option>
                  <option value='C'>C</option>
                  <option value='JavaScript'>JavaScript</option>
                  <option value='TypeScript'>TypeScript</option>
                  <option value='PHP'>PHP</option>
                  <option value='Python'>Python</option>
                  <option value='Ruby'>Ruby</option>
                  <option value='Java'>Java</option>
                  <option value='Photoshop'>Photoshop</option>
                  <option value='Wordpress'>Wordpress</option>
                  <option value=''>- - other - -</option>
                </select>
              </div>
            </div>
            <div className='row col-12 col-lg-8 row-cols-lg-4 row-cols-sm-3 row-cols-md-4 row-cols-2 g-2 d-flex justify-content-lg-start justify-content-center mt-lg-4'>
              {props.technologies.length === 0 ? (
                <small className='text-center project-color-grey'>
                  Add Technologies!
                </small>
              ) : null}

              {props.technologies.map((tech) => {
                return (
                  <div key={tech.key_id} className='  bord technology-array'>
                    <div>
                      <p className='techText'>{tech.techtools}&nbsp;</p>
                    </div>
                    <i
                      onClick={(e) => {
                        handleClick(tech.key_id, tech);
                      }}
                      className='d-flex align-items-center fas fa-times pointer'
                    ></i>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className='d-none col-12  d-flex flex-column flex-lg-row justify-content-center '
            ref={otherRef}
          >
            <div className='d-flex justify-content-center'>
              <div
                ref={techRef}
                className='col-7 col-md-8 col-lg-12 p-lg-3 mb-3 d-flex justify-content-center flex-column  '
              >
                <input
                  name='techtools'
                  type='text'
                  className='tech-input -width input-style form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Other'
                  onChange={onOtherChange}
                  value={other}
                  maxLength={15}
                />

                <small ref={errorRef} className='ms-1 tech-error d-none '>
                  No technology added!
                </small>
              </div>
            </div>
            <div
              ref={paddingRef}
              className='d-flex align-items-start pt-3 justify-content-center'
            >
              <button
                className='pe-3 mb-lg-3 mb-5 ps-3 btn add-btn'
                onClick={addOther}
              >
                Add Tech
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;

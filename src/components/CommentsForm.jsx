import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { useNavigate } from 'react-router-dom';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const FormContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: ${theme.sizes.large};
  width: 400px;
  border: 2px solid ${theme.colors.primary};
  background-color: white; /* Додана ця строка для білого фону */
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const CommentTextarea = styled.textarea`
  margin-bottom: ${theme.sizes.medium};
  padding: ${theme.sizes.medium};
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  font-size: ${theme.sizes.medium};
  resize: vertical;
`;

const CommentButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.sizes.medium};
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-size: ${theme.sizes.medium};

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`;

const CommentsForm = ({ onAddComment, onClosePopup }) => {
  const [comment, setComment] = useState('');
  const formRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClosePopup();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClosePopup]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      onAddComment(comment);
      setComment('');
      onClosePopup();
      navigate('/');
    }
  };

  return (
    <PopupOverlay>
      <FormContainer ref={formRef}>
        <CommentForm autoComplete="on" onSubmit={handleSubmit}>
          <CommentTextarea
            rows="6"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Напишіть свій відгук тут..."
          />
          <CommentButton type="submit">
            Додати коментар
          </CommentButton>
        </CommentForm>
      </FormContainer>
    </PopupOverlay>
  );
};

export default CommentsForm;

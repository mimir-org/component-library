import styled from "styled-components";

export const FileItemContainer = styled.div`
  display: flex;
  align-content: left;
  align-items: center;
  flex-direction: row;

  textarea {
    min-height: 80px;
  }

  & .fileitem-delete {
    :hover {
      cursor: pointer;
      border: 2px solid black;
      border-radius: 50%;
    }
  }

  @media screen and ${(props) => props.theme.mimirorg.queries.phoneAndBelow} {
    flex-direction: column;

    textarea {
      width: 100%;
    }
  }
`;

export const FileInfoContainer = styled.div`
  display: flex;
  width: 30%;
  align-content: center;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  margin-right: ${(props) => props.theme.mimirorg.spacing.xl};
  padding-left: ${(props) => props.theme.mimirorg.spacing.s};
  padding-right: ${(props) => props.theme.mimirorg.spacing.s};

  :hover {
    outline: 1px solid ${(props) => props.theme.mimirorg.color.primary.base};
    cursor: pointer;
  }

  @media screen and ${(props) => props.theme.mimirorg.queries.phoneAndBelow} {
    margin-top: ${(props) => props.theme.mimirorg.spacing.xl};
    margin-bottom: ${(props) => props.theme.mimirorg.spacing.xl};
    width: 100%;
  }
`;

export const FileIconContainer = styled.div`
  display: flex;
  min-width: 50px;

  @media screen and ${(props) => props.theme.mimirorg.queries.phoneAndBelow} {
  }
`;

export const FileTextareaContainer = styled.div`
  width: 70%;

  @media screen and ${(props) => props.theme.mimirorg.queries.phoneAndBelow} {
    width: 100%;
  }
`;

export const FileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 150px;
  margin-left: ${(props) => props.theme.mimirorg.spacing.l};
  margin-right: ${(props) => props.theme.mimirorg.spacing.l};

  @media screen and ${(props) => props.theme.mimirorg.queries.phoneAndBelow} {
    max-width: none;
    width: 70%;

    h4,
    p {
      margin: 0px;
    }
  }
`;

FileItemContainer.defaultProps = {};

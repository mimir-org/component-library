import styled from "styled-components";

interface AdminContentProps {
  name: string;
  id: string;
  description: string;
  rds: string;
  createdBy: string;
  created: string;
  updatedBy: string;
  updated: string;
}

const AdminWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const AdminContent = ({
  name,
  id,
  description,
  rds,
  createdBy,
  created,
  updatedBy,
  updated,
}: AdminContentProps) => {
  return (
    <AdminWrapper>
      <p>Here is some demo content</p>
      <p>Here is some demo content</p>
    </AdminWrapper>
  );
};

import styled from 'styled-components';
import UserAvatar from '../features/authentication/UserAvatar';
import HeaderMenu from './HeaderMenu';

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);
  padding: 1.2rem 4.8rem;
  display: flex;
  gap: 2.4rem;
  justify-content: flex-end;
  align-items: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

import React from 'react';
import PropTypes from 'prop-types';

import { Icon, AboutTooltip } from 'shared/components';
import { Link } from 'react-router-dom';
import { NavLeft, LogoLink, StyledLogo, Bottom, Item, ItemText } from './Styles';

const propTypes = {
  issueSearchModalOpen: PropTypes.func.isRequired,
  issueCreateModalOpen: PropTypes.func.isRequired,
  projectName: PropTypes.string.isRequired,
};

const ProjectNavbarLeft = ({ issueSearchModalOpen, issueCreateModalOpen, projectName }) => (
  <NavLeft>
    <LogoLink to="/">
      <StyledLogo color="#fff" />
    </LogoLink>

    <Item>
      <Icon type="board" size={27} />
      <ItemText>
        <Link to={`/project/${projectName}`}>View Board</Link>
      </ItemText>
    </Item>
    <Item>
      <Icon type="settings" size={27} />
      <ItemText>
        <Link to={`/project/settings/${projectName}`}>Settings</Link>
      </ItemText>
    </Item>

    <Item onClick={issueSearchModalOpen}>
      <Icon type="search" size={22} top={1} left={3} />
      <ItemText>Search issues</ItemText>
    </Item>

    <Item onClick={issueCreateModalOpen}>
      <Icon type="plus" size={27} />
      <ItemText>Create Issue</ItemText>
    </Item>

    <Bottom>
      <AboutTooltip
        placement="right"
        offset={{ top: -218 }}
        renderLink={linkProps => (
          <Item {...linkProps}>
            <Icon type="help" size={25} />
            <ItemText>About</ItemText>
          </Item>
        )}
      />
    </Bottom>
  </NavLeft>
);

ProjectNavbarLeft.propTypes = propTypes;

export default ProjectNavbarLeft;

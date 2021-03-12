import { Link } from 'react-router-dom';

function TableLink({ children, to }) {
    // Conditionally wrapping content into a link
    const ContentTag = to ? Link : 'div';
  
    return (
      <td>
        <ContentTag to={to}>{children}</ContentTag>
      </td>
    );
  }
export default TableLink;
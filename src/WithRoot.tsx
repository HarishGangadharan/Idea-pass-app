import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from './reducers';
import ThemeContext from './ThemeContext';

interface IRootProps {
  activeTheme: any,
  children: any
}

/**
 * HOC that wraps up theme provider with main APP
 */
const WithRoot = ({ children, activeTheme }: IRootProps) => (
    <div className="themeWrapper" data-theme={activeTheme}>
        <ThemeContext.Provider value={activeTheme}>
            {children}
        </ThemeContext.Provider>
    </div>
);

const mapStateToProps = (state: IState) => ({
  activeTheme: state.theme.activeTheme
});

export default connect(mapStateToProps)(WithRoot);

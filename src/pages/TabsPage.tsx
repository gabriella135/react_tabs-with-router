import classNames from 'classnames';
import { FC, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage: FC<Props> = ({ tabs }) => {
  const { tabId = 0 } = useParams();
  const selectedTab = tabs.find((tab) => tabId === tab.id);
  const [isSelectedTab, setIsSelectedTab] = useState(true);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                data-cy="Tab"
                className={classNames({ 'is-active': tabId === id })}
                key={id}
              >
                <Link
                  to={`/tabs/${id}`}
                  onClick={() => setIsSelectedTab(false)}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {isSelectedTab
          ? 'Please select a tab'
          : selectedTab?.content}
      </div>
    </>
  );
};

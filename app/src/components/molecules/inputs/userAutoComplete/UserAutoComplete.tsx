import { ForwardedRef, forwardRef, InputHTMLAttributes, useEffect, useState } from "react";
import { Sizing } from "../../../core/props/sizing";
import { Input } from "../input/Input";
import {
  UserAutoCompleteContainer,
  UserAutoCompleteItemContainer,
  UserAutoCompleteItemElement,
} from "./UserAutoComplete.styled";

export interface UserInput {
  id: string;
  value: string;
}

export type UserAutoCompleteProps = InputHTMLAttributes<HTMLInputElement> &
  Omit<Sizing, "boxSizing"> & {
    users: UserInput[];
    value?: string;
    onItemChange?: (id: string) => void;
  };

export const UserAutoComplete = forwardRef(
  ({ value, users, onItemChange, ...rest }: UserAutoCompleteProps, ref: ForwardedRef<HTMLInputElement>) => {
    // Default user
    const defaultUserInput = (): string => {
      if (value == null || users == null) return "";

      const initialUser = users.find((x) => x.id === value);
      if (initialUser == null) return "";

      return initialUser.value;
    };

    // State
    const [selectedUserId, setSelectedUserId] = useState<string | undefined>(value ?? undefined);
    const [activeUser, setActiveUser] = useState<number>(0);
    const [filteredUsers, setFilteredUsers] = useState<UserInput[]>([]);
    const [showUsers, setShowUsers] = useState<boolean>(false);
    const [userInput, setUserInput] = useState<string>(defaultUserInput);

    // Use effect
    useEffect(() => {
      if (selectedUserId == null || users == null) return;
      const user = users.find((user) => user.id === selectedUserId);
      if (user == null) return;
      setUserInput(user.value);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      setFilteredUsers(filter(userInput));
      setShowUsers(showUsers);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInput]);

    // User filter list
    const filter = (text: string): UserInput[] => {
      const f: UserInput[] = [];

      if (text == null || text.trim() === "") return f;

      users.filter((user) => {
        const userValue = user.value.trim().toLowerCase();
        const textLowerCase = text.toLowerCase();
        const split = userValue.split(" ");

        if (
          userValue.startsWith(textLowerCase, 0) ||
          (split != null && split[0].startsWith(textLowerCase, 0)) ||
          split[split.length - 1].startsWith(textLowerCase, 0)
        )
          f.push(user);
      });
      return f;
    };

    const onChange = (e) => {
      const userInput = e.currentTarget.value;
      setUserInput(userInput);
      setShowUsers(true);
    };

    const onKeyDown = (e) => {
      // Enter key
      if (e.keyCode === 13) {
        e.preventDefault();
        setActiveUser(0);
        setShowUsers(false);
        setUserInput(filteredUsers[activeUser]?.value ?? "");
        setSelectedUserId(filteredUsers[activeUser]?.id ?? "");
        onItemChange && onItemChange(filteredUsers[activeUser]?.id ?? "");
      }

      // Up arrow
      if (e.keyCode === 38) {
        if (activeUser === 0) {
          return;
        }
        setActiveUser(activeUser - 1);
      }

      // Down arrow
      if (e.keyCode === 40) {
        if (activeUser - 1 === filteredUsers.length) {
          return;
        }
        setActiveUser(activeUser + 1);
      }

      // Delete
      if (e.keyCode === 46 || e.keyCode === 8) {
        e.preventDefault();
        setActiveUser(0);
        setShowUsers(false);
        setUserInput("");
        setSelectedUserId("");
        onItemChange && onItemChange("");
      }
    };

    const onClick = (e, id: string) => {
      setActiveUser(0);
      setFilteredUsers([]);
      setShowUsers(false);
      setUserInput(e.currentTarget.innerText);
      setSelectedUserId(id);
      onItemChange && onItemChange(id);
    };

    return (
      <UserAutoCompleteContainer>
        <Input type="text" onChange={onChange} onKeyDown={onKeyDown} value={userInput} ref={ref} {...rest} />
        {showUsers && userInput && filteredUsers.length > 0 && (
          <UserAutoCompleteItemContainer>
            {filteredUsers.map((user, index) => {
              return (
                <UserAutoCompleteItemElement
                  active={index === activeUser}
                  key={user.id}
                  onClick={(e) => onClick(e, user.id)}
                >
                  {user.value}
                </UserAutoCompleteItemElement>
              );
            })}
          </UserAutoCompleteItemContainer>
        )}
      </UserAutoCompleteContainer>
    );
  }
);

UserAutoComplete.displayName = "UserAutoCompleteProps";

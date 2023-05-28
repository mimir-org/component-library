import { HTMLAttributes } from "react";
import styled from "styled-components";
import { getTextRole } from "../../../../core/theme/helpers";

export const CalendarContentContainer = styled.div<HTMLAttributes<HTMLDivElement>>`
  .react-calendar {
    width: 350px;
    max-width: 100%;
    background-color: inherit;
    border: none;
    ${getTextRole("body-large")};
    border-radius: ${(props) => props.theme.mimir.border.radius.medium};
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
    border-radius: ${(props) => props.theme.mimir.border.radius.medium};
  }
  .react-calendar__navigation button:disabled {
    background-color: ${(props) => props.theme.mimir.color.outline.base};
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: ${(props) => props.theme.mimir.color.secondary.container?.base};
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
    abbr {
      text-decoration: none;
    }
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    max-width: 100%;
    padding: ${(props) => props.theme.mimir.spacing.l};
    background: none;
    text-align: center;
    line-height: 16px;
    border-radius: ${(props) => props.theme.mimir.border.radius.medium};
  }
  .react-calendar__tile:disabled {
    background-color: ${(props) => props.theme.mimir.color.outline.base};
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: ${(props) => props.theme.mimir.color.secondary.container?.base};
  }
  .react-calendar__tile--now {
    background-color: ${(props) => props.theme.mimir.color.secondary.container?.base};
    color: ${(props) => props.theme.mimir.color.text.base};
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background-color: ${(props) => props.theme.mimir.color.secondary.container?.base};
  }
  .react-calendar__tile--hasActive {
    background: ${(props) => props.theme.mimir.color.tertiary.container?.base};
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background-color: ${(props) => props.theme.mimir.color.secondary.container?.base};
  }
  .react-calendar__tile--active {
    background-color: ${(props) => props.theme.mimir.color.tertiary.container?.base};
    color: ${(props) => props.theme.mimir.color.text.base};
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: ${(props) => props.theme.mimir.color.secondary.container?.base};
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: ${(props) => props.theme.mimir.color.surface.variant.base};
  }
`;

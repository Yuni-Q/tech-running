import { css } from 'styled-components'

import { BACKGROUND_COLORS, FONT_COLORS } from './style'

export const color = css`
  .text-primary {
    color: ${FONT_COLORS.primary} !important;
    &:hover,
		&:focus {
			color: darken(${FONT_COLORS.primary}, 15%) !important;
		}
  }
  .text-secondary {
    color: ${FONT_COLORS.secondary} !important;
    &:hover,
		&:focus {
			color: darken(${FONT_COLORS.secondary}, 15%) !important;
		}
  }
  .text-disabled {
    color: ${FONT_COLORS.disabled} !important;
    &:hover,
		&:focus {
			color: darken(${FONT_COLORS.disabled}, 15%) !important;
		}
  }
  .text-accent {
    color: ${FONT_COLORS.accent} !important;
    &:hover,
		&:focus {
			color: darken(${FONT_COLORS.accent}, 15%) !important;
		}
  }
  .text-inverse {
    color: ${FONT_COLORS.inverse} !important;
    &:hover,
		&:focus {
			color: darken(${FONT_COLORS.inverse}, 15%) !important;
		}
  }
  .text-info {
    color: ${FONT_COLORS.info} !important;
    &:hover,
		&:focus {
			color: darken(${FONT_COLORS.info}, 15%) !important;
		}
  }
  .text-success {
    color: ${FONT_COLORS.success} !important;
    &:hover,
		&:focus {
			color: darken(${FONT_COLORS.success}, 15%) !important;
		}
  }
  .text-danger {
    color: ${FONT_COLORS.danger} !important;
    &:hover,
		&:focus {
			color: darken(${FONT_COLORS.danger}, 15%) !important;
		}
  }
  .text-warning {
    color: ${FONT_COLORS.warning} !important;
    &:hover,
		&:focus {
			color: darken(${FONT_COLORS.warning}, 15%) !important;
		}
  }
  .text-upcoming {
    color: ${FONT_COLORS.upcoming} !important;
    &:hover,
		&:focus {
			color: darken(${FONT_COLORS.upcoming}, 15%) !important;
		}
  }

  .background-primary {
    background: ${BACKGROUND_COLORS.primary} !important;
  }
  .background-secondary {
    background: ${BACKGROUND_COLORS.secondary} !important;
  }
  .background-disabled {
    background: ${BACKGROUND_COLORS.disabled} !important;
  }
  .background-button {
    background: ${BACKGROUND_COLORS.button} !important;
  }
  .background-inverse {
    background: ${BACKGROUND_COLORS.inverse} !important;
  }
  .background-info {
    background: ${BACKGROUND_COLORS.info} !important;
  }
  .background-success {
    background: ${BACKGROUND_COLORS.success} !important;
  }
  .background-danger {
    background: ${BACKGROUND_COLORS.danger} !important;
  }
  .background-warning {
    background: ${BACKGROUND_COLORS.warning} !important;
  }
  .background-upcoming {
    background: ${BACKGROUND_COLORS.upcoming} !important;
  }
  .background-lightAccent {
    background: ${BACKGROUND_COLORS.lightAccent} !important;
  }
  .background-lightInfo {
    background: ${BACKGROUND_COLORS.lightInfo} !important;
  }
  .background-lightSuccess {
    background: ${BACKGROUND_COLORS.lightSuccess} !important;
  }
  .background-lightDanger {
    background: ${BACKGROUND_COLORS.lightDanger} !important;
  }
  .background-lightWarning {
    background: ${BACKGROUND_COLORS.lightWarning} !important;
  }
  .background-lightUpcoming {
    background: ${BACKGROUND_COLORS.lightUpcoming} !important;
  }
`

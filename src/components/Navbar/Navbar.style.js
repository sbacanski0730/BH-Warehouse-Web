import styled from 'styled-components';

export const StyledNavbar = styled.div`
	background-color: var(--bg);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	position: fixed;
	width: 100vw;
	user-select: none;
	background: var(-bg);
	border-bottom: 1px solid var(--main-color);

	.wrapper {
		width: 100%;
		max-height: 6rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 1.5rem 7%;

		/* max-width: 90%; */
	}

	.icon {
		max-width: 4rem;

		img {
			width: 100%;
			user-select: none;
		}
	}

	.mobile-menu-container {
		display: none;
	}

	.navbar-container {
		ul {
			display: flex;
		}

		.navbar-element {
			border: 1px solid transparent;
			list-style: none;
			margin: 1rem;
			padding: 0.5rem 0.1rem;
		}

		#logout-button {
			display: none;
		}

		.link {
			text-decoration: none;
		}

		.navbar-element:hover {
			cursor: pointer;
			border-bottom: 1px solid var(--main-color);
		}

		.navbar-element span {
			color: var(--main-color);
			font-size: 1.2rem;
		}
	}

	.logout-container {
		#logout-button {
			text-decoration: none;
		}
	}

	@media screen and (max-width: 960px) {
		.mobile-menu-container {
			display: flex;
			#mobile-menu-icon {
				color: #fff;
				font-size: 2.2rem;
			}

			&:hover {
				cursor: pointer;
			}
		}

		.navbar-container {
			position: absolute;
			top: 6rem;
			left: -100%;
			width: 100%;
			height: calc(100vh - 6rem);
			transition: all 0.5s ease;
		}
		.navbar-container.active {
			left: 0;
			background-color: var(--bg);
			transition: all 0.6s ease;
			z-index: 1;
		}

		.navbar-container {
			ul {
				height: 100%;
				flex-direction: column;
				align-items: center;
				justify-content: flex-start;
			}

			.navbar-element {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				flex: 1;
				margin: 0;
				max-height: 4rem;
				border: none;

				&:hover {
					cursor: pointer;
					background-color: var(--main-color);
					transition: all 0.4s ease;
					border: none;

					span {
						transition: all 0.4s ease;
						font-size: 1.5rem;
						color: var(--bg);
					}
				}
			}

			#logout-button {
				display: flex;
				width: 100%;
				height: 100%;
				padding: 0;

				.link {
					width: 100%;
					height: 100%;
				}

				&:hover {
					background: none;
				}
			}
		}

		.logout-container {
			display: none;
		}
	}
`;

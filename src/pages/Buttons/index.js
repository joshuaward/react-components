import './buttons.scss';

// components
import Button from '../../components/Button';
import { MdOutlineDangerous, MdOutlineWarning, MdOutlineCheckCircleOutline, MdWaterDrop, MdStar, MdOutlinePlayCircleFilled } from "react-icons/md";

function Buttons() {
	return(
		<div className="buttons" style={{display: 'flex', alignItems: 'flex-start', gap: '16px'}}>
			<div className="buttons-column" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px'}}>
				<div className="buttons-item">
					<Button>
						Plain
					</Button>
				</div>
				<div className="buttons-item">
					<Button primary>
						Primary
					</Button>
				</div>
				<div className="buttons-item">
					<Button secondary>
						Secondary
					</Button>
				</div>
				<div className="buttons-item">
					<Button success>
						Success
					</Button>
				</div>
				<div className="buttons-item">
					<Button warning>
						Warning
					</Button>
				</div>
				<div className="buttons-item">
					<Button danger>
						Danger
					</Button>
				</div>
			</div>
			<div className="buttons-column" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px'}}>
				<div className="buttons-item">
					<Button>
						<MdStar />
						Plain
					</Button>
				</div>
				<div className="buttons-item">
					<Button primary>
						<MdOutlinePlayCircleFilled />
						Primary
					</Button>
				</div>
				<div className="buttons-item">
					<Button secondary>
						<MdWaterDrop />
						Secondary
					</Button>
				</div>
				<div className="buttons-item">
					<Button success>
						<MdOutlineCheckCircleOutline />
						Success
					</Button>
				</div>
				<div className="buttons-item">
					<Button warning>
						<MdOutlineWarning />
						Warning
					</Button>
				</div>
				<div className="buttons-item">
					<Button danger>
						<MdOutlineDangerous />
						Danger
					</Button>
				</div>
			</div>
			<div className="buttons-column" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px'}}>
				<div className="buttons-item">
					<Button rounded>
						Plain
					</Button>
				</div>
				<div className="buttons-item">
					<Button rounded primary>
						Primary
					</Button>
				</div>
				<div className="buttons-item">
					<Button rounded secondary>
						Secondary
					</Button>
				</div>
				<div className="buttons-item">
					<Button rounded success>
						Success
					</Button>
				</div>
				<div className="buttons-item">
					<Button rounded warning>
						Warning
					</Button>
				</div>
				<div className="buttons-item">
					<Button rounded danger>
						Danger
					</Button>
				</div>
			</div>
			<div className="buttons-column" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px'}}>
				<div className="buttons-item">
					<Button outline>
						Plain
					</Button>
				</div>
				<div className="buttons-item">
					<Button outline primary>
						Primary
					</Button>
				</div>
				<div className="buttons-item">
					<Button outline secondary>
						Secondary
					</Button>
				</div>
				<div className="buttons-item">
					<Button outline success>
						Success
					</Button>
				</div>
				<div className="buttons-item">
					<Button outline warning>
						Warning
					</Button>
				</div>
				<div className="buttons-item">
					<Button outline danger>
						Danger
					</Button>
				</div>
			</div>
			<div className="buttons-column" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px'}}>
				<div className="buttons-item">
					<Button outline rounded>
						Plain
					</Button>
				</div>
				<div className="buttons-item">
					<Button outline rounded primary>
						Primary
					</Button>
				</div>
				<div className="buttons-item">
					<Button outline rounded secondary>
						Secondary
					</Button>
				</div>
				<div className="buttons-item">
					<Button outline rounded success>
						Success
					</Button>
				</div>
				<div className="buttons-item">
					<Button outline rounded warning>
						Warning
					</Button>
				</div>
				<div className="buttons-item">
					<Button outline rounded danger>
						Danger
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Buttons;
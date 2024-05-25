import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { WhatsApp, Mail, LinkedIn } from "@mui/icons-material";

const MUISpeedDial = () => {
  const speedDialActionTypes = {
    WHATSAPP: "WHATSAPP",
    MAIL: "MAIL",
    INSTAGRAM: "INSTAGRAM",
    LINKEDIN: "LINKEDIN",
  };

  const doAction = (socialMediaType, attachment) => () => {
    switch (socialMediaType) {
      case speedDialActionTypes.WHATSAPP:
        window.open(`https://wa.me/${attachment}?text=Hello there!`, "_blank");
        break;

      case speedDialActionTypes.MAIL:
        window.open(`mailto://${attachment}`);
        break;

      case speedDialActionTypes.LINKEDIN:
        window.open("https://www.linkedin.com/", "_blank");
        break;

      default:
        break;
    }
  };

  const actions = [
    {
      icon: <LinkedIn />,
      name: "Connect on LinkedIn",
      function: doAction(speedDialActionTypes.LINKEDIN),
    },
    {
      icon: <Mail />,
      name: "Send us an email",
      function: doAction(speedDialActionTypes.MAIL, "hello@burbankbosch.com"),
    },
    {
      icon: <WhatsApp />,
      name: "Connect Via Whatsapp",
      function: doAction(speedDialActionTypes.WHATSAPP, "233209384829"),
    },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.function}
        />
      ))}
    </SpeedDial>
  );
};

export default MUISpeedDial;

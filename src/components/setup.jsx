import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const PlayerSetup = ({ playerSetup }) => {
    const [color, setColor] = useState(null)
    const [boardSize, setBoardSize] = useState(0)

    const classes = useStyles()

    const handleOnSubmit = () => {
        playerSetup({
            'color': color,
            'boardSize': boardSize,
        })
    }

    const handleOnColorChange = (event) => {
        setColor(event.target.value)
    }

    const handleOnSizeChange = (event) => {
        setBoardSize(event.target.value)
    }

    return (
        <div className="player-setup">
            <div className="player-setup-forms">
                <FormControl className={classes.formControl}>
                    <InputLabel id="color-select-label">Color</InputLabel>
                    <Select
                        labelId="color-select-label"
                        id="color-select"
                        value={color}
                        onChange={handleOnColorChange}
                    >
                        <MenuItem value={"black"}>Black</MenuItem>
                        <MenuItem value={"white"}>White</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="size-select-label">Board Size</InputLabel>
                    <Select
                        labelId="size-select-label"
                        id="size-select"
                        value={boardSize}
                        onChange={handleOnSizeChange}
                    >
                        <MenuItem value={9}>9x9</MenuItem>
                        <MenuItem value={50}>50x50</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="player-setup-button">
                <Button variant="contained" onClick={handleOnSubmit}>Play</Button>
            </div>
        </div>
    )
}

export default PlayerSetup;
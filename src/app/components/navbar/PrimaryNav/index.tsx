'use client'

import Search from "@mui/icons-material/Search";
import { Button, IconButton, Toolbar, Typography } from "@mui/material";

export type PrimaryNavComponentProps = {
    leftLinkContent: string;
    titleContent: string;
    rightButtonContent: string;
}

export default function PrimaryNavComponent(props: PrimaryNavComponentProps): React.ReactElement {
    const { leftLinkContent, titleContent, rightButtonContent } = props;

    return <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">{leftLinkContent}</Button>
        <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
        >
            {titleContent}
        </Typography>
        <IconButton>
            <Search />
        </IconButton>
        <Button variant="outlined" size="small">
            {rightButtonContent}
        </Button>
    </Toolbar>
}
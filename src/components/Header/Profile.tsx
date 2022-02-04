import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Maíra Bassetto</Text>
          <Text color="gray.300" fontSize="small">
            mairabassetto@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Maíra Bassetto" src="https://github.com/mairabassetto.png" />
    </Flex>
  );
}
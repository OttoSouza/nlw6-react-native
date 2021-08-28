import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import { FlatList } from "react-native";
import Guild, { GuildProps } from "../../components/Guild/index";
import { Divider } from "../../components/Divider/index";
import Load from "../../components/Load";
import { api } from "../../services/api";

interface Props {
  handleGuildSelected: (guild: GuildProps) => void;
}
const Guilds: React.FC<Props> = ({ handleGuildSelected }: Props) => {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    await api.get("/users/@me/guilds").then((response) => {
      setGuilds(response.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <Container>
      {loading ? (
        <Load />
      ) : (
        <FlatList
          data={guilds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSelected(item)} />
          )}
          ItemSeparatorComponent={() => <Divider screen="Guilds" />}
          showsVerticalScrollIndicator={false}
          style={{
            width: "100%",
          }}
          contentContainerStyle={{ marginBottom: 69, paddingTop: 104 }}
          ListHeaderComponent={() => <Divider screen="Guilds" />}
        />
      )}
    </Container>
  );
};

export default Guilds;

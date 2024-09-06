import java.util.*;

public class app {

    public List<String> demoList() {
        List<String> strawHatCrew = new ArrayList<>();
        strawHatCrew.add("Luffy");
        strawHatCrew.add("Zoro");
        strawHatCrew.add("Nami");
        strawHatCrew.remove("Nami");

        if (strawHatCrew.contains("Zoro")) {
            System.out.println("Zoro is in the crew.");
        }

        return strawHatCrew;
    }

    public Set<String> demoSet() {
        Set<String> devilFruits = new HashSet<>();
        devilFruits.add("Gomu Gomu no Mi");
        devilFruits.add("Hana Hana no Mi");
        devilFruits.add("Gomu Gomu no Mi");
        devilFruits.remove("Hana Hana no Mi");

        return devilFruits;
    }

    public Map<Integer, String> demoMap() {
        Map<Integer, String> crewRoles = new HashMap<>();
        crewRoles.put(1, "Captain");
        crewRoles.put(2, "Swordsman");
        crewRoles.put(3, "Navigator");
        crewRoles.remove(3);

        if (crewRoles.containsKey(1)) {
            System.out.println("Luffy is the Captain.");
        }

        return crewRoles;
    }

    public static void main(String[] args) {
        app demo = new app();
        System.out.println("Straw Hat Crew (List): " + demo.demoList());
        System.out.println("Devil Fruits (Set): " + demo.demoSet());
        System.out.println("Crew Roles (Map): " + demo.demoMap());
    }
}

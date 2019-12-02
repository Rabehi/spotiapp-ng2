import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-artista",
  templateUrl: "./artista.component.html",
  styleUrls: ["./artista.component.css"]
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.getArtista(params["id"]);
      this.getTopTracks(params["id"]);
    });
  }

  ngOnInit() {}

  getArtista(id: string) {
    this.loading = true;
    this.spotify.getArtista(id).subscribe(artista => {
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe(topTracks => {
      this.topTracks = topTracks;
    });
  }
}
